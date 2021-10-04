import Express from "express";
import SubscriptionController from "../controller";
const router = Express.Router();

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new SubscriptionController();
    const response = await controller.createSubscription(data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
