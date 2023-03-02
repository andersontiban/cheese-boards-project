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
 

})