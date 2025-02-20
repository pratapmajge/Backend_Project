// const asyncHandler = () => {}



export {asyncHandler}

// const asyncHandler= () => {}
// const asyncHandler= (func) => () => {}
// const asyncHandler= (func) => async () => {}

const asyncHandler= (fn) => async (req , res , next) => {
    try {
        
    } catch (error) {
        res.status(err.code || 500).json({
            success:false
        })
    }
}