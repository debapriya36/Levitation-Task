// ApiError class for handling errors 
// class ApiError extends Error {
//     constructor(
//         statusCode = 500,
//         message = "Something went wrong",
//     ){
//         super(message)
//         this.statusCode = statusCode
//         this.message = message
//     }
// }

class ApiError {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        this.statusCode = statusCode
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

module.exports = ApiError;