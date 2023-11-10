import crypto from 'crypto'

const apiKey = process.env.CLOUDINARY_KEY
const apiSecret = process.env.CLOUDINARY_SECRET
const timestamp = Math.floor(Date.now() / 1000)


export const uploadImageToCloudinary =  async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'Animalin')
  console.log("files cloud ",file)
  

  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Failed to upload image to Cloudinary: ${response.status} ${response.statusText}`)
  }

  const responseData = await response.json()
  const { public_id, secure_url, original_filename } = responseData
  console.log("responseData", responseData)

  return { publicId: public_id, img: secure_url, imgNom: original_filename }
};


export const deleteImageFromCloudinary = async (publicId) => {
  const paramString = `invalidate=true&public_id=${publicId}&timestamp=${timestamp}`
  const stringToSign = `${paramString}${apiSecret}`
  const signature = crypto.createHash('sha1').update(stringToSign).digest('hex')

  const data = `invalidate=true&public_id=${publicId}&timestamp=${timestamp}&signature=${signature}&api_key=${apiKey}`

  const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/destroy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  });

  if (!response.ok) {
    throw new Error(`Failed to delete image from Cloudinary: ${response.status} ${response.statusText}`)
  }

  const responseData = await response.json()

  return responseData
};