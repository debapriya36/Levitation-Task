const express = require('express');
const router = express.Router();
const {verifyJWT} = require('../middlewares/auth.middlware.js');
const { createBlog , getBlogs , getBlogById , deleteBlog , updateBlogContent } = require('../controllers/blog.controller.js');

// public routes
router.route('/getBlogs').get(getBlogs);
router.route('/getBlog').get(getBlogById);

// protected routes
router.route('/create').post(verifyJWT, createBlog);
router.route('/update').patch(verifyJWT, updateBlogContent);
router.route('/delete').delete(verifyJWT, deleteBlog);


module.exports = router;