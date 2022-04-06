//mongodb+srv://user:123456@cruddb.hfs55.mongodb.net/db_sunrise_airlines?retryWrites=true&w=majority
const mongoose = require('mongoose');
const chalk = require("chalk");

const conectarDB = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODB_DATABASE,{

            useNewUrlParser: true,
            useUnifiedTopology: true,


        });
        console.log(`${chalk.blue("✓")} DB connected`);

    } catch (error) {
        console.error(error);
        process.exit(1); //stop execution
    }

};

module.exports = conectarDB;