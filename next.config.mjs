/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/design-boilerplate' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/design-boilerplate/' : '',
};

export default nextConfig;
