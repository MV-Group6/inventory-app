const {items} = require('./seedData.js');

const {sequelize} = require('./db');
const {Item} = require('./models/item');
const {User} = require("./models/User")
const {Cart} = require("./models/Cart")
const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}
const user = async () => {
    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await User.create({
            username: "User",
            password: "Pass"
        })
        await User.create({
            username: "Jim",
            password: "Pass"
        })

        console.log("One user Added!");
    } catch (error) {
        console.error(error);
    }
}
const cart = async () => {
    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Cart.create({
            userID: 100,
            itemID: 100
        })

        console.log("Cart Added!");
    } catch (error) {
        console.error(error);
    }
}
cart();
user();
seed();
