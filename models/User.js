// love the descriptive comments throughout!
//importing database instance
const sequelize = require("../index")
//importing datatypes
const {DataTypes} = require("sequelize")

 
//Defining User model/tables
const User = sequelize.define("User",{
    name: DataTypes.STRING,
    email: DataTypes.STRING
})

//export model/table
module.exports = User