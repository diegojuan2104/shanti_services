import Express from "express";
import SchedulesController from "../controller";
const router = Express.Router();


/**
 * Available Schedules 
 * @returns  All the available schedules for the classes
 */
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

/**
 * Schedule info
 * @params {String} id
 * @returns info of a specific schedule 
 */
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


/**
 * Schedule creation
 * @returns creates a schedule
 * @body {String} schedule_day, {String} initial_hour,{String} final_hour, {Bool} available
 */
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


/**
 * Schedule update, must enter at least one element in the body to be updated
 * @params {String} id
 * @returns updates a schedule
 * @body {String} schedule_day, {String} initial_hour,{String} final_hour, {Bool} available
 */
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

/**
 * Schedule delete
 * @params {String} id
 * @returns deletes a schedule
 */
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
