import Express from "express";
import SubscriptionController from "../controller";
const router = Express.Router();

router.post("/create-category", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new SubscriptionController();
    const response = await controller.exampleFunction(data);
    res.json(response);
  } catch (error) {
    return { error: error}
  }
});
