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
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new SubscriptionController();
    const response = await controller.getSubscription(id);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const controller = new SubscriptionController();
    const response = await controller.updateSubscription(id, data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new SubscriptionController();
    const response = await controller.deleteSubscription(id);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});
router.get("/", async (req, res, next) => {
  try {
    const controller = new SubscriptionController();
    const response = await controller.getSubscription();
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default router;
