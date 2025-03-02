const asyncHandler = (fn) => {
    return (req , res , next) => {
        Promise.resolve(fn(req, res , next)).catch((err) => next(err)) 
        // instead of catch we can write reject 
        // Promise.reject((err) => next(err))
    }
}



export {asyncHandler}

// const asyncHandler= () => {}
// const asyncHandler= (func) => () => {}
// const asyncHandler= (func) => async () => {}

// method second
    // this is higher order funtion in short nested functions
// const asyncHandler= (fn) => async (req , res , next) => {
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }