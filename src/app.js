import express from "express";
import cors from "cors";
import teachersController from "../src/services/teachers/routes";
import schedulesRoutes from "../src/services/schedules/routes"

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/teachers", teachersController);
app.use("/api/service-schedules", schedulesRoutes);
app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "Resource not found!",
  });
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);
