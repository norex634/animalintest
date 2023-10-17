import cloudinary from 'cloudinary';


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET
});

export const UploadImage = async (allBuffer) => {
   // Créez un objet de type FileReader pour lire le contenu du fichier
  const multiplePhotosPromise = allBuffer.map((file) => (
    cloudinary.v2.uploader.upload(file.filepath, {folder: 'animaux'})
  ));
  return await Promise.all(multiplePhotosPromise)
}