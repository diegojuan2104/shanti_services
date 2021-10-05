import Express from "express";
import ClassesController from "../controller";
const router = Express.Router();


/**
 * Available Classes 
 * @returns  all the available classes of the school
 */
router.get("/", async (req, res, next) => {
  try {
    const controller = new ClassesController();
    const response = await controller.findClasses();
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
 * @returns info of a specific class 
 */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new ClassesController(id);
    const response = await controller.findClassById(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

/**
 * Class creation
 * @returns creates a class
 * @params {Object} Class
 */
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new ClassesController();
    const response = await controller.insertClass(data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * Class update
 * @returns updates a class
 * @params {Object} Class
 */
router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const controller = new ClassesController();
    const response = await controller.updateClass(id,data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * Class delete
 * @returns deletes a class
 * @params {Object} Class
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const controller = new ClassesController();
    const response = await controller.deleteClass(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
