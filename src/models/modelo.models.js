const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelosSchema = new Schema(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        cameraResolution: {type: String, required: true},
        SO: {type: String, required: true},
        memory: {type: String, required: false}
        
    },{
        timestamps: true
    }
);

const Modelos = mongoose.model("models", modelosSchema)

module.exports = Modelos;