import cloudinary from 'cloudinary';  // Import cloudinary
import fs from 'fs';                  // Import file system
import dotenv from 'dotenv';           // Import dotenv for environment variables

// Configure dotenv to load environment variables
dotenv.config();

// Cloudinary configuration function
export const cloudinaryConnect = () => {
  try {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  } catch (error) {
    console.log(error);
  }
};

// Function to upload a file to Cloudinary
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // Upload the file to Cloudinary
    const response = await cloudinary.v2.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });

    console.log('File is uploaded on Cloudinary', response.url);
    return {
      success: true,
      response,
      message: 'File has been uploaded on Cloudinary',
    };
  } catch (error) {
    fs.unlinkSync(localFilePath);  // Remove local file if upload fails
    console.error(error);
    return null;
  }
};
