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


router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new SchedulesController(id);
    const response = await controller.findScheduleById(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});


router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new SchedulesController();
    const response = await controller.insertSchedule(data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const controller = new SchedulesController();
    const response = await controller.updateSchedule(id,data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const controller = new SchedulesController();
    const response = await controller.deleteSchedule(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
