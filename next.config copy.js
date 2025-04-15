// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: isProd ? '/nextjs' : '',
    assetPrefix: isProd ? '/nextjs' : '',
};


// const nextConfig = {
//     output: 'export',
//     trailingSlash: true,
//   };

module.exports = nextConfig;



