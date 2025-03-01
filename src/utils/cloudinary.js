import { v2 as cloudinary } from "cloudinary"
import fs from 'fs'


cloudinary.config({
    cloud_name: process.env.CLOUDNINARY_CLOUD_NAME,
    api_key: process.env.CLOUDNINARY_API_KEY,
    api_secret:process.env.CLOUDNINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        //upload file on cloudinary
        const response =await cloudinary.uploader.upload(localFilePath ,{
            resource_type:"auto"
        })
        // file has been uploaded
        console.log("file is uploaded" , response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // removes locally saved temporary file as upload operation get failed
        return null;
    }
}

export {uploadOnCloudinary}