const express = require("express");
const PORT = 8000;
const {connect} = require("./src/utils/database");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;

const modeloRouter = require("./src/routes/modelos.routes");
const marcaRouter = require("./src/routes/marca.routes");
const usersRouter = require("./src/routes/users.routes");
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

dotenv.config()
connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/modelos", modeloRouter);
app.use("/marca", marcaRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));

