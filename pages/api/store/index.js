import { dbConnect } from "@util/mongodb";
import Store from "@model/Store"

dbConnect()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const user = await Store.create(req.body);
            res.status(201).json({ success: true, data: user })
        } catch (error) {
            console.log("error", error)
            res.status(400).json({ success: false });
        }
    } else if (req.method === 'GET') {
        try {
            const users = await Store.find({});
            res.status(200).json({ success: true, data: users })
        } catch (error) {
            console.log("error", error)
            res.status(400).json({ success: false });
        }
    }
}
