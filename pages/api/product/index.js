import mongoose from "mongoose";

import { dbConnect } from "@util/mongodb";
import Store from "@model/Store";

dbConnect();

export default async function handler(req, res) {
    // const { id } = req.query;
    const id = "60ed1dd5638dc3257dd1f29f"
    const _id = mongoose.Types.ObjectId(id);
    if (req.method === "POST") {
        const { body } = req;
        const productRedister = {
            name: body.name,
            unid: body.unid,
            historyPurchasePrice: [body.purchasePrice],
            hisrorySalePrice: [body.salePrice]
        };
        try {
            const product = await Store.findOneAndUpdate(
                {
                    _id
                },
                {
                    $push: {
                        products: productRedister,
                    }
                }
            );
            res.status(201).json({ success: true, data: product });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    }
    // This funtion Get a espedifict Store
    else if (req.method === "GET") {
        try {
            const store = await Store.find({ _id });
            res.status(200).json({ success: true, data: store });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    }
    // This funtion Get a espedifict Store
    else if (req.method === "Delete") {
        try {
            const store = await Store.find({ _id });
            res.status(200).json({ success: true, data: store });
        } catch (error) {
            res.status(400).json({ success: false });
        }
    }
}
