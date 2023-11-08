require('dotenv').config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Config json and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Solve Cors
app.use(cors(({credentials: true, origin: `${process.env.PORT_FRONT}`})));
app.use(express.json());

//Db connection
const conn = require("./db/conn");
conn();

//Routes
const port = process.env.PORT_BACK;

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});