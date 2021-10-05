import templateEngine from "../template_engine";
import nodeMailer from "nodemailer";
require("dotenv").config({ path: ".env" });
export default class servicioCorreo {
  constructor() {
    this.engine = new templateEngine();
    this.serverMail = process.env.SERVER_MAIL;
    this.password = process.env.SERVER_MAIL_PASSWORD;
  }
  /**
   *
   * @param {String} templateName name of the template to send
   * @param {Object} dataMail to who and subject
   * @param {object} data to send to the template
   */
  async sendMailTo(templateName, dataMail, data) {
    try {
      const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: this.serverMail,
          pass: this.password,
        },
      });
      let template = this.engine
        .readFile(
          `${__dirname.split("/controller")[0]}/templates/` +
            templateName +
            ".html"
        )
        .toString();
      template = this.engine.renderTemplate(template, data);
      const mailOptions = {
        from: this.serverMail,
        to: dataMail.to,
        subject: dataMail.subject,
        html: template,
      };

      await transporter.sendMail(mailOptions);
      transporter.close();
      return { message: "mail sent" };
    } catch (error) {
      throw error;
    }
  }
}
