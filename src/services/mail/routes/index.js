import Express from "express";
import MailController from "../controller";
const router = Express.Router();

router.post("/", async (req, res, next) => {
  try {
    const {templateName,dataMail,dataTemplate} = req.body;
    const controller = new MailController();
    const response = await controller.sendMailTo(templateName, dataMail, dataTemplate);
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = router;
