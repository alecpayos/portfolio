/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'release/out',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
