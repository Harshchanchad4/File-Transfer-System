import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import uploadRoute from './routes/route.js';
import { cloudinaryConnect } from './config/cloudinary.js';
import { connectDB } from './config/database.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
console.log("PORT " , PORT);
// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize database and Cloudinary connections
connectDB();
cloudinaryConnect();

// Routes for handling file uploads
app.use('/api/v1', uploadRoute);

// Basic route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

// Start server
app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
