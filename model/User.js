const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add the name"]
        },
        email: {
            type: String,
            require: [true, "Please add the email"],
            unique: true
        },
        avatar: {
            type: String
        },
        state: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
