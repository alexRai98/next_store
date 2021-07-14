module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://store-eight-azure.vercel.app/*"
            }
        ];
    }
};
