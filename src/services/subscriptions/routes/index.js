import Express from "express";
import SubscriptionController from "../controller";
const router = Express.Router();
/**
 * Route to create a subscription.
 */
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new SubscriptionController();
    const response = await controller.createSubscription(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/**
 * Route to get a subscription.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new SubscriptionController();
    const response = await controller.getSubscription(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/**
 * Route to update a subscription.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const controller = new SubscriptionController();
    const response = await controller.updateSubscription(id, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/**
 * Route to delete a subscription.
 */
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const controller = new SubscriptionController();
    const response = await controller.deleteSubscription(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
/**
 * Route to get a;; subscriptions.
 */
router.get("/", async (req, res, next) => {
  try {
    const controller = new SubscriptionController();
    const response = await controller.getSubscription();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
