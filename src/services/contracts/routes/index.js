import Express from "express";
import ContractController from "../controller";
const router = Express.Router();
/**
 * Route to get all contracts
 */
router.get("/", async (req, res, next) => {
  try {
    const controller = new ContractController();
    const response = await controller.findContracts();
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

/**
 * Route to get a contract
 */
router.get("/:id", async (req, res, next) => {
  try {
    const controller = new ContractController();
    const { id } = req.params;
    const response = await controller.findContract(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

/**
 * Route to create a contract
 */
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const controller = new ContractController();
    const response = await controller.createContract(data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * Route to update a contract
 */
router.put("/:id", async (req, res, next) => {
  try {
    const controller = new ContractController();
    const data = req.body;
    const { id } = req.params;
    data.id_number = id;
    const response = await controller.updateContract(id, data);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * Route to delete a contract
 */
router.delete("/:id", async (req, res, next) => {
  try {
    const controller = new ContractController();
    const { id } = req.params;
    const response = await controller.deleteContract(id);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
});

export default router;
