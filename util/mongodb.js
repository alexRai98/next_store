import mongoose from 'mongoose';

const connection = {};
const MONGO_URI = "mongodb+srv://rai_98:XJD9AJv3u4a3yIAT@webstore.nu2qu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const MONGO_URI = process.env.MONGODB_URI

export async function dbConnect() {
    if (connection.isConnected) {
        console.log("Estamos conectados")
        return;
    }

    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Nos conectamos")
    connection.isConnected = db.connections[0].readyState;
}
