import express from "express";
import cors from "cors";
import teachersRoutes from "../src/services/teachers/routes";
import subcriptionRoutes from "../src/services/subscriptions/routes";
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.json())
app.use("/api/teachers", teachersController);
app.use("/api/service-schedules", schedulesRoutes);
=======
app.use(express.json());
app.use("/api/v1/service-teachers", teachersRoutes);
app.use("/api/v1/service-subscription", subcriptionRoutes);
>>>>>>> 319eb04856ea389af97b44dacd04355ac38452ed
app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "Resource not found!",
  });
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);
