const ApiError = require("../utility/ApiError.utils");
const ApiResponse = require("../utility/ApiResponse.utils");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

// middleware to verify JWT token
const verifyJWT = async(req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("token", token);

        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      
    
        const user = await User.findById({
            _id : decodedToken.id
        }).select("-password -refreshToken")
       
    
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }  
    
        req.user = user;
        next()
    } catch (error) {
       return res.status(500).json(new ApiResponse(500, {}, error.message));
    }   
}

module.exports = {
    verifyJWT
}