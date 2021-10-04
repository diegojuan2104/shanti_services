import express from "express";
import cors from "cors";

import teachersRoutes from "../src/services/teachers/routes";
import subcriptionRoutes from "../src/services/subscriptions/routes";
import schedulesRoutes from "../src/services/schedules/routes";
import contractsRoutes from "../src/services/contracts/routes";
import userRoutes from "../src/services/users/routes"
import classesRoutes from "../src/services/classes/routes"

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json())
const URL = "/api/v1/service-"

app.use(URL+"teachers", teachersRoutes);
app.use(URL+"users", userRoutes);
app.use(URL+"subscription", subcriptionRoutes);
app.use(URL+"schedules", schedulesRoutes);
app.use(URL+"contracts", contractsRoutes);
app.use(URL+"classes", classesRoutes);

app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "Resource not found!",
  });
});
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
app.listen(process.env.PORT || PORT);
console.log(`Server on port ${PORT}`);
