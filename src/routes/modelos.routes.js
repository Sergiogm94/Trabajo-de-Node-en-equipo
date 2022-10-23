const express = require("express");

const router = express.Router();

const {getAllModels, getModel, newModel, updateModel, deleteModel} = require("../controllers/modelos.controllers");

router.get("/", getAllModels);
router.get("/:id", getModel);
router.post("/", newModel);
router.put("/:id", updateModel);
router.delete("/:id", deleteModel);


module.exports = router;

