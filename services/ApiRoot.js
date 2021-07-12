export const getApiRoot = () => {

    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:3000/api"
    } else {
        return "https://next-store-mf6ydczin-alexrai98.vercel.app/api   "
    }
}