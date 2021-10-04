import Express from "express";
import SchedulesController from "../controller";
const router = Express.Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new SchedulesController();
    const response = await controller.findSchedules();
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

router.post("/", async (req, res, next) => {
  try {
    const controller = new SchedulesController();
    const response = await controller.insertSchedules();
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
