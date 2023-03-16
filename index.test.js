const sequelize = require("./index") //get database connection
const User = require("./models/User") //get user table
const Board = require("./models/Board")//get board table
const Cheese = require("./models/Cheese")//get cheese table

describe('Models/tables', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });
    //one-to-many association between User and Board models

    // instead of putting these associations in the test file, 
    // we can make an index.js file in the models folder and put the associations there
    User.hasMany(Board)
    Board.belongsTo(User)

    //Associates the Board and Cheese models with a Many-to-Many relationship.
    Board.belongsToMany(Cheese, {through: "cheese_boards"})
    Cheese.belongsToMany(Board, {through: "cheese_boards"})

    test("insert data into User table", async()=> {
        let user1 = await User.create({
            name: "anderson",
            email: "anderson@gmail.com"
        })
        expect(user1.name).toBe("anderson")

    })
    test("insert data into Board table", async()=> {
        let board1 = await Board.create({
            type: "Board #1",
            description: "Wooden",
            rating: 5
        })
        expect(board1.type).toBe("Board #1")

    })
    test("insert data into Cheese table", async()=> {
        let mozzarella = await Cheese.create({
            title: "Mozzarella",
            description: "Best cheese around"
        })
        expect(mozzarella.title).toBe("Mozzarella")

    })

    // instead of testing these methods when testing associations,
    // we can add a couple of test data values to the tables
    // and verify their attributes 
    test("one-to-many association between User and Board models", async()=> {
        expect(Board.belongsTo(User))
        expect(User.hasMany(Board))
    })
    test("Board and Cheese models association", async()=> {
        expect(Board.belongsToMany(Cheese, {through: "cheese_boards"}))
        expect(Cheese.belongsToMany(Board, {through: "cheese_boards"}))
    })
    //Eager loading
    test("Eager loading", async()=>{
        const boardCheese = await Board.findAll({
            include:[
                {model: Cheese, as:"Cheeses"}
            ]
        })
        console.log(boardCheese)
        // missing expectation statement in this test
    })
 

})