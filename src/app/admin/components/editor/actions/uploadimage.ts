import { supabase } from "@/app/utils/supabase";

const UploadImage = async (file: File) => {
  try {
    const bucket = "leogadildotcom-image-bucket";
    const filename = generateRandomFilename();
    const filePath = `uploads/${Date.now()}_${filename}`;

    // Upload file to Supabase
    const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    // Generate public URL for the uploaded file
    const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

    if (!publicUrlData?.publicUrl) {
      throw new Error("Failed to retrieve public URL for the uploaded file.");
    }

    return publicUrlData.publicUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const generateRandomFilename = (length = 16) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default UploadImage;
