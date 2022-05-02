const express = require('express');
const connectDB = require('./database');
const app = express();
const chalk = require("chalk");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
const multer = require("multer");
dotenv.config();
connectDB();



app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(logger("dev"));

app.use('/public', express.static(`${__dirname}/src/public/img`))





//routes------------------------------------------------------------------------------------------------
app.use('/api/user', require('./routes/user'));
app.use('/api/project', require('./routes/project'));
app.use('/api/contact', require('./routes/contact'));


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        `${chalk.blue("✓")} App is running at ${chalk.bgWhite.black(
            `${process.env.HOST}:${port}`
        )}`
    );
    console.log("  Press CTRL-C to stop\n");
});