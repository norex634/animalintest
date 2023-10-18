/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['res.cloudinary.com','images.unsplash.com','c4.wallpaperflare.com','www.thesprucepets.com','picsum.photos'],
    },
}

module.exports = nextConfig