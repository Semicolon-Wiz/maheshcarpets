import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

export const upload = multer({ storage });

const fileUpload = async (buffer, fileName) => {
  try {
    if (!buffer) return null;

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          public_id: fileName,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    console.log("File uploaded successfully:", result.url);
    return result.url;
  } catch (error) {
    console.error("Error uploading file:", error.message);
    return null;
  }
};

export { fileUpload };
