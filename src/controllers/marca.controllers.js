const Marca = require("../models/marca.models");
const Modelo = require("../models/modelo.models");
const {deleteFile} = require("../middlewares/delete.file");

const getAllMarcas = async (req, res) => {
    try {
        const allMarcas = await Marca.find();
        return res.status(200).json(allMarcas)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMarca = async (req, res) => {
    try {
        const {id} = req.params;
        const oneMarca = await Marca.findById(id);
        return res.status(200).json(oneMarca)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const newMarca = async (req, res) => {
    try {
        const {name, facturation, country, SO, models} = req.body;
        const newMarca = new Marca({name, facturation, country, SO, models});
        if(req.file.photo){
            newMarca.photo = req.file.photo.path
        }
        const createdMarca = await newMarca.save();
        return res.status(200).json(createdMarca);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateMarca = async (req, res) => {
    try {
        const {id} = req.params;
        const putMarca = new Marca(req.body);
        putMarca._id = id;
        if(req.file){
            putMarca.photo = req.file.path
        }
        const marcaDb = await Marca.findByIdAndUpdate(id, putMarca, {new: true});
        if(marcaDb.photo){
            deleteFile(marcaDb.photo)
        }
        if(!marcaDb){
            return res.status(404).json({"message": "Not found"});
        }
        return res.status(200).json(marcaDb);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMarca = async (req, res) => {
    try {
        const {id} = req.params;
        const marcaDb = await Marca.findByIdAndDelete(id);
        if(!marcaDb){
            return res.status(404).json({"message": "Not found"});
        }
        return res.status(200).json(marcaDb);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getAllMarcas, getMarca, newMarca, updateMarca, deleteMarca};