import express from "express";
import cors from "cors";
import teachersRoutes from "../src/services/teachers/routes";
import subcriptionRoutes from "../src/services/subscriptions/routes";
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/service-teachers", teachersRoutes);
app.use("/api/v1/service-subscription", subcriptionRoutes);
app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "El recurso que busca no existe",
  });
});

app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);
