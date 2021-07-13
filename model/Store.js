import User from "@model/User";

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add the name"]
        },
        historyPurchasePrice: [],
        hisrorySalePrice: [],
        unid: String,
        description: String
        // provider: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const StoreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add the name"],
            unique: true
        },
        // users: [User],
        products: [ProductSchema]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.models.Store || mongoose.model("Store", StoreSchema);
