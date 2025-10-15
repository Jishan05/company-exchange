/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Other compiler options...
    
    // Explicitly set removeConsole to false for production
    // or conditionally enable it for a specific environment.
    removeConsole: false, 
  },
};

module.exports = nextConfig;
