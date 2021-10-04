import express from "express";
const app = express();
import cors from "cors";
import teachersController from "../src/services/teachers/routes";

const PORT = process.env.PORT;

//Middlewares JSON use
app.use(express.json());

//Cross-origin resource sharing
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api/teachers", teachersController);

app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "El recurso que busca no existe",
  });
});

app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);
