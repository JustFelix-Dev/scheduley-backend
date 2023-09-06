import cloudinary from 'cloudinary';
import { config as configDotenv } from 'dotenv';
configDotenv();

cloudinary.v2.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API, 
  api_secret: process.env.CLOUD_SECRET,
});

export default cloudinary;
