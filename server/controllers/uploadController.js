import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';
import generateUniqueCode from "../utils/generateRandom.js"; // Correct path if it’s utils, not utills

import User from "../model/User.js"; // Use ES6 import syntax if you're using ES modules

// Controller to handle file upload
export const uploadFileToCloudinary = async (req, res) => {
  try {
    const file = req.file;

    // Ensure that the file was uploaded via multer
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'uploads',
      resource_type: 'raw',
      timeout: 60000, // Set timeout to 60 seconds (adjust as needed)
    });

    // Optionally delete the file from the local server after uploading to Cloudinary
    fs.unlinkSync(file.path); // Deletes file from server after upload

    // Generate the unique code
    const uniqueCode = generateUniqueCode();

    // Save the new file info to the database
    const newFile = await User.create({
      uniqueCode: uniqueCode, // Store the generated unique code
      fileUrl: result.secure_url
    });

    // Respond with Cloudinary URL and file info
    res.status(200).json({
      message: 'File uploaded successfully!',
      cloudinaryUrl: result.secure_url, // Cloudinary file URL
      publicId: result.public_id,
      uniqueCode: uniqueCode // Send the unique code back in the response if needed
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Failed to upload file', error });
  }
};
