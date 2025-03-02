import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
const registerUser = asyncHandler(async (req,res) =>{
    // get user details from frontend (currently from postman)
    

    const {fullname , email , username , password} =req.body
    console.log("email :" , email);


    // check any field is not empty
    // if(!fullname === ""){
    //     throw new ApiError(400, "Fullname is required")
    // }
    // we can make seperate if statement for each email , name to avoid this following type of code is used

    if([fullname , email, username, password].some((field) => field?.trim() === "")){
        throw new ApiError(400 , "All fields are required")
    }

    // check user already exist or not

    const exitedUser = User.findOne({
        $or: [{username} , {email}]
    })

    if(exitedUser){
        throw new ApiError(409,"User with this Credentials are already exist")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar file required")
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400,"Avatar file required")
    }

    User.create({
        fullname,
        avatar: avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
        
    })
})

export {registerUser}