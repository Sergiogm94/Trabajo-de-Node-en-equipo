const express = require("express");
const upload = require("../middlewares/upload.file");

const router = express.Router();

const {getAllMarcas, getMarca, newMarca, updateMarca, deleteMarca} = require("../controllers/marca.controllers");

router.get("/", getAllMarcas);
router.get("/:id", getMarca);
router.post("/", upload.single('photo'), newMarca);
router.put("/:id", upload.single("photo"), updateMarca);
router.delete("/:id", deleteMarca);


module.exports = router;