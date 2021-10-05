import Express from "express";
import TeacherController from "../controller";
const router = Express.Router();

/**
 * Route to get all teachers
 */
router.get("/", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const response = await controller.findTeachers();
    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});

/**
 * Route to get a teacher
 */
router.get("/:id", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const { id } = req.params;
    const response = await controller.findTeacher(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});

/**
 * Route to create a teacher
 */
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new TeacherController();
    const response = await controller.createTeacher(data);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Route to update a teacher
 */
router.put("/:id", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const data = req.body;
    const { id } = req.params;
    data.id_number = id;
    const response = await controller.updateTeacher(id, data);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Route to delete a teacher
 */
router.delete("/:id", async (req, res, next) => {
  try {
    const controller = new TeacherController();
    const { id } = req.params;
    const response = await controller.deleteTeacher(id);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});

export default router;
