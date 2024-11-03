import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadFileToCloudinary } from '../controllers/uploadController.js';
import { fetchFile } from '../controllers/fetchController.js';

const router = express.Router();

// Set up multer with disk storage to temporarily store file on server before uploading to Cloudinary


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files are temporarily stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Create unique filename
  }
});




const upload = multer({ storage }); // Middleware to handle file uploads

// Define route for file upload through the middleware
router.post('/upload', upload.single('file'), uploadFileToCloudinary);
router.post('/fetch', fetchFile);

export default router;
