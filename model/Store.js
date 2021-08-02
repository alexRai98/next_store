const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add the name"]
        },
        historyPurchasePrice: [],
        historySalePrice: [],
        unid: String,
        description: String
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
        products: [ProductSchema]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.models.Store || mongoose.model("Store", StoreSchema);
