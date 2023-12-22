const ApiError = require("../utility/ApiError.utils");
const ApiResponse = require("../utility/ApiResponse.utils");
const User = require("../models/user.model");

// options for cookies
const options = {
    httpOnly: true,
    secure: true
}

const generateAccessAndRefereshTokens = async (userId = "") => {
    try {
        if (userId === "") {
            throw new ApiError(400, "Please provide userId");
        }
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken };

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token");
    }
}

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // check if required fields are provided
        if (!username || !email || !password) {
            throw new ApiError(400, "Please provide required fields");
        }

        // check if user already exists
        const isExisted = await User.findOne({
            $or: [
                { username },
                { email }
            ]
        })

        if (isExisted) {
            throw new ApiError(400, "User already exists");
        }
        const user = await User.create({
            username,
            email,
            password
        });

        const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

        const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
        return res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    201,
                    loggedInUser,
                    "User registered successfully"
                )
            );


    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json(new ApiError(error.statusCode, error.message));
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new ApiError(400, "Please provide email or password");
        }
        const user = await User.findOne({ email });
        if (!user) {
            throw new ApiError(400, "User not found");
        }
        const isPasswordMatched = await user.isPasswordCorrect(password);
        if (!isPasswordMatched) {
            throw new ApiError(400, "Invalid credentials");
        }
        const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);
        const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    loggedInUser,
                    "User logged in successfully"
                )
            );

    } catch (error) {
        console.log(error?.message)
        return res
            .status(error.statusCode || 500)
            .json(
                new ApiError(
                    error.statusCode,
                    error.message
                )
            )
    }
}

const logoutUser = async (req, res) => {
    try {
        const reqUserId = req.user._id;

        if (!reqUserId) {
            throw new ApiError(400, "Please provide userId");
        }

        const logoutUser = await User.findByIdAndUpdate({
            _id: reqUserId
        }, {
            refreshToken: undefined
        }, { new: true }).select("-password -refreshToken");

        return res
        .status(200)
        .clearCookie("accessToken",options)
        .clearCookie("refreshToken",options)
        .json(
            new ApiResponse(
                200,
                logoutUser,
                "User logged out successfully"
            )
        );

    } catch (error) {
        console.log(error?.message)
        return res
            .status(error.statusCode || 500)
            .json(
                new ApiError(
                    error.statusCode,
                    error.message || "Something went wrong while logging out"
                )
            )
    }
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser
};