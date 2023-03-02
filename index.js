
const Sequelize = require("sequelize")

//creating sequelize instance
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite"
})



//export instance to use elsewhere
module.exports = sequelize;