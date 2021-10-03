const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./config/database");
const PORT = process.env.PORT || 4000;

//Middlewares JSON use
app.use(express.json());

//Cross-origin resource sharing
app.use(cors());


app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);