import { supabase } from "@/app/utils/supabase";
import { GenerateRandomFilename } from "@/app/utils/helpers";

const UploadImage = async (file: File) => {
  try {
    const bucket = "leogadildotcom-image-bucket";
    const filename = GenerateRandomFilename();
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

export default UploadImage;
