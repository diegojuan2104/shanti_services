import Express from "express";
import UsersController from "../controller";
const router = Express.Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new UsersController();
    const response = await controller.findUsers();
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
    const controller = new UsersController(id);
    const response = await controller.findUserById(id);
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
    const controller = new UsersController();
    const response = await controller.insertUser(data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const controller = new UsersController();
    const response = await controller.updateUser(id,data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const controller = new UsersController();
    const response = await controller.deleteUser(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
