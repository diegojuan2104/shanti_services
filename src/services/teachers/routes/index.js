import Express from "express";
import TeacherController from "../controller";
const router = Express.Router();

router.get("/teachers", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const response = await controller.findTeachers();
    res.json(response);

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
