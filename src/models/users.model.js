const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const {validationEmail, validationPassword} = require("../validators/validation");
const usersSchema = new Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
    },{
        timestamps: true
    }

);

   /* usersSchema.pre("save", function(next) {
        if(!validationEmail(this.email)){
            console.log({code: 403, message: "Invalid email"})
            return next();
        }
        if(!validationPassword(this.password)){
            console.log({code: 403, message: "Invalid email"})
            return next();
        }

        this.password = bcrypt.hashSync(this.password, 10);
        next(); 
    })*/

const Users = mongoose.model("users", usersSchema)

module.exports = Users;