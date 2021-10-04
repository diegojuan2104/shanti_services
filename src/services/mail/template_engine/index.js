import fs from "fs";
import Handlebars from "handlebars";

export default class Engine {
  readFile(route) {
    return fs.readFileSync(route);
  }

  renderTemplate(templateName, info) {
    const template = Handlebars.compile(templateName);
    return template(info);
  }
}

