//importing database instance
const sequelize = require("../index")
//importing datatypes
const {DataTypes} = require("sequelize")


//Defining User model/table
const Board = sequelize.define("Board",{
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
})

//export model/table
module.exports = Board