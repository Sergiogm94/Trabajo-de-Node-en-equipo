const Modelo = require("../models/modelo.models");

const getAllModels = async (req, res) => {
    try {
        const allModels = await Modelo.find();
        return res.status(200).json(allModels)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getModel = async (req, res) => {
    try {
        const {id} = req.params;
        const oneModel = await Modelo.findById(id);
        return res.status(200).json(oneModel)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const newModel = async (req, res) => {
    try {
        const {name, price, cameraResolution, SO, memory} = req.body;
        const newModel = new Modelo({name, price, cameraResolution, SO, memory});
        const createdModel = await newModel.save();
        return res.status(200).json(createdModel);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateModel = async (req, res) => {
    try {
        const {id} = req.params;
        const putModel = new Modelo(req.body);
        putModel._id = id;

        const modelDb = await Modelo.findByIdAndUpdate(id, putModel, {new: true});
        if(!modelDb){
            return res.status(404).json({"message": "Not found"});
        }
        return res.status(200).json(modelDb);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteModel = async (req, res) => {
    try {
        const {id} = req.params;
        const modelDb = await Modelo.findByIdAndDelete(id);
        if(!modelDb){
            return res.status(404).json({"message": "Not found"});
        }
        return res.status(200).json(modelDb);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getAllModels, getModel, newModel, updateModel, deleteModel};