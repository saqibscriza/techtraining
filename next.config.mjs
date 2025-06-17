/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable built-in styled-components support (no Babel needed)
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: true,
            fileName: false, // Set to true if you want CSS-in-JS debug info
            pure: true, // Enable dead code elimination
            cssProp: true // Enable the 'css' prop
        }
    },
    // Optional: If you need other compiler features
    experimental: {
        appDir: true // Only if using App Router
    }
};

export default nextConfig;