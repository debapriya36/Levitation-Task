const ApiError = require("../utility/ApiError.utils");
const ApiResponse = require("../utility/ApiResponse.utils");
const Blog = require("../models/blog.model");
const User = require("../models/user.model");


const createBlog = async (req, res) => {
    let status = 201;
    try {
        console.log(req.user);
        const { title, content } = req.body;
        if (!title || !content) {
            throw new ApiError(400, "Please provide required fields");
        }
        const reqUserId = req.user._id;
        if (!reqUserId) {
            throw new ApiError(400, "User not Registerd or Logged In");
        }
        const blog = await Blog.create(
            {
                title,
                content,
                creator: reqUserId
            }
        );
        const user = await User.findByIdAndUpdate({
            _id: reqUserId
        }, {
            $push: {
                createdBlogs: blog._id
            }
        }, {
            new: true
        }).select("-password -refreshToken ");

        console.log({ user, blog });

        return res.status(status).json(
            new ApiResponse(
                201,
                blog,
                "Blog Created Successfully"
            )
        );

    } catch (error) {
        return res.status(500).json(
            new ApiResponse(
                500,
                {},
                error.message
            )
        );
    }
}

const getBlogs = async (req, res) => {
    try {
        // pagination with 25 blogs per page
        const blogs = await Blog.find().limit(25);
        return res.status(200).json(
            new ApiResponse(
                200,
                blogs,
                "Blogs fetched successfully"
            )
        );
    } catch (error) {
        return res.status(500).json(
            new ApiResponse(
                500,
                {},
                error.message
            )
        );
    }
}

const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.body;
        if (!blogId) {
            throw new ApiError(400, "Please provide blog Id");
        }
        const blog = await Blog.findById(
            {
                _id: blogId
            }
        );
        if (!blog) {
            throw new ApiError(400, "Blog not found");
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                blog,
                `Blog with ${blogId} fetched successfully`
            )
        );
    } catch (error) {
        return res.status(500).json(
            new ApiResponse(
                500,
                {},
                error.message
            )
        );
    }
}

const updateBlogContent = async (req, res) => {
    try {
        const { blogId, content } = req.body;
        if (!blogId) {
            throw new ApiError(400, "Please provide blog Id");
        }
        if (!content) {
            throw new ApiError(400, "Please provide content");
        }

        const updatedBlog = await Blog.findOneAndUpdate({
            _id: blogId
        },
            {
                $set: {
                    content
                }
            }
            , {
                new: true
            })

        if (!updatedBlog) {
            throw new ApiError(400, "Blog not found");
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                updatedBlog,
                `Blog with ${blogId} updated successfully`
            )
        );
    } catch (error) {
        return res.status(500).json(
            new ApiError(
                500,
                {},
                error.message
            )
        );
    }
}

const deleteBlog = async (req , res) => {
    try {
        const { blogId } = req.body;
        if (!blogId) {
            throw new ApiError(400, "Please provide blog Id");
        }
        const deletedBlog = await Blog.findOneAndDelete({
            _id: blogId
        });
        if (!deletedBlog) {
            throw new ApiError(400, "Blog not found");
        }
        return res.status(200).json(
            new ApiResponse(
                200,
                deletedBlog,
                `Blog with ${blogId} deleted successfully`
            )
        );
    } catch (error) {
        return res.status(500).json(
            new ApiResponse(
                500,
                {},
                error.message
            )
        );
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlogContent,
    deleteBlog
}