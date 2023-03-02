//importing database instance
const sequelize = require("../index")
//importing datatypes
const {DataTypes} = require("sequelize")


//Defining User model/table
const Cheese = sequelize.define("Cheese",{
    title: DataTypes.STRING,
    description: DataTypes.STRING
})

//export model/table
module.exports = Cheese