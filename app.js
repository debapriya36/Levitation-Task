require('dotenv').config();

const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const PORT = process.env.PORT || 8001;
const connectDB = require('./database/index.js');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user.route.js');
const blogRouter = require('./routes/blog.route.js');


// global middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// connect to mongodb database
connectDB();


// Limiting the number of requests from an IP
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: "Too many requests from this IP, please try again after 15 minutes"
});
app.use(apiLimiter);


// routing 
app.use('/api/v1/user/', userRouter);
app.use('/api/v1/blog/', blogRouter);



app.listen(PORT,()=> console.log(`⚙️  Server running on port ${PORT}`));