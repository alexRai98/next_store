import mongoose from "mongoose";

import { dbConnect } from "@util/mongodb";
import Store from "@model/Store";

dbConnect();

export default async function handler(req, res) {
    const { id } = req.query;
    const _id = mongoose.Types.ObjectId(id);
    if (req.method === "POST") {
        const { body } = req;
        const productRedister = {
            name: body.name,
            unid: body.unid,
            historyPurchasePrice: [body.purchasePrice],
            hisrorySalePrice: [body.salePrice]
        };
        console.log("Product register",productRedister)
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
            console.log("error", error);
            res.status(400).json({ success: false });
        }
    }
    // This funtion Get a espedifict Store
    else if (req.method === "GET") {
        console.log("MIRAMEEE")
        console.log("iddd",_id)
        try {
            const store = await Store.find({ _id });
            res.status(200).json({ success: true, data: store });
        } catch (error) {
            console.log("error", error);
            res.status(400).json({ success: false });
        }
    }
    // This funtion Get a espedifict Store
    else if (req.method === "Delete") {
        try {
            const store = await Store.find({ _id });
            res.status(200).json({ success: true, data: store });
        } catch (error) {
            console.log("error", error);
            res.status(400).json({ success: false });
        }
    }
}
