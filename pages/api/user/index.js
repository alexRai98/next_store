import { dbConnect } from "@util/mongodb";
import User from "@model/User"

dbConnect()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const user = await User.create(req.body);
            res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log("error", error)
            res.status(400).json({ success: false });
        }
    } else if (req.method === 'GET') {
        try {
            const users = await User.find({});
            res.status(200).json({ success: true, data: users })
        } catch (error) {
            console.log("error", error)
            res.status(400).json({ success: false });
        }
    }
}
