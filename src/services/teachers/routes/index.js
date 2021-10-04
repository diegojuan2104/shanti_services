import Express from "express";
import TeacherController from "../controller";
const router = Express.Router();

router.get("/teachers", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const response = await controller.findTeachers();
    console.log('hola mor')

    res.json(response);

  } catch (error) {
    console.log('chao mor')
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
