const mongoose = require("mongoose")

const oneToOneSchema = new mongoose.Schema(
    {
        "sender": {type: String },
        "receiver": {type: String},
        "sender_message": {type: String},
        "key": {type: String}
    }
)

module.exports = mongoose.model("oneToOne", oneToOneSchema)