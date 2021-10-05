import Express from "express";
import MailController from "../controller";
const router = Express.Router();

/**
 * Route to send a mail notification.
 */
router.post("/", async (req, res, next) => {
  try {
    const {templateName,dataMail,dataTemplate} = req.body;
    const controller = new MailController();
    const response = await controller.sendMailTo(templateName, dataMail, dataTemplate);
    res.json(response);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
});
module.exports = router;
