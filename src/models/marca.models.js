const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const marcaSchema = new Schema(
    {
        name: {type: String, required: true},
        facturation: {type: Number, required: true},
        country: {type: Array, required: true},
        SO: {type: String, required: true},
        models: [{type: Schema.Types.ObjectId, ref: "models"}],
        photo: {type: String, required: false}
    },{
        timestamps: true
    }
);

const Marca = mongoose.model("marca", marcaSchema)

module.exports = Marca;