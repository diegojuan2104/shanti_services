import express from 'express';
const app = express();
import cors from 'cors';
require("dotenv").config({ path: ".env" });

const PORT = process.env.PORT;

//Middlewares JSON use
app.use(express.json());

//Cross-origin resource sharing
app.use(cors());


app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);