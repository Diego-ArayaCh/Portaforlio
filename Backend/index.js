const express = require('express');
const connectDB = require('./database');
const app = express();
const chalk = require("chalk");
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
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
//routes------------------------------------------------------------------------------------------------




const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(
        `${chalk.blue("✓")} App is running at ${chalk.bgWhite.black(
            `http://localhost:${port}`
        )}`
    );
    console.log("  Press CTRL-C to stop\n");
});