import Express from "express";
import SchedulesController from "../controller";
const router = Express.Router();

router.post("/schedule", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new SchedulesController();
    const response = await controller.exampleFunction(data);
    res.json(response);
  } catch (error) {
    return { error: error}
  }
});
