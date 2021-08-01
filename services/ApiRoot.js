export const getApiRoot = () => {

    if (process.env.NODE_ENV === 'development') {
        return "http://localhost:3000/api"
    } else {
        return "https://https://store-alexrai98.vercel.app/api"
    }
}