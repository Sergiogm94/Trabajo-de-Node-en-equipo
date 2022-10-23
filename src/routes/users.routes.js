const express = require("express");

const router = express.Router();
const {register, login, logout} = require("../controllers/users.controllers");
const {isAuth} = require("../middlewares/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", [isAuth], logout);

module.exports = router;