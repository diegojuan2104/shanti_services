import fs from "fs";
import Handlebars from "handlebars";

export default class Engine {
  /**
   * Read a file
   * @param {String} route 
   * @returns return the content of the path 
   */
  readFile(route) {
    return fs.readFileSync(route);
  }

  /**
   * render a template with the data needed
   * @param {String} templateName 
   * @param {String} data 
   * @returns 
   */
  renderTemplate(templateName, info) {
    const template = Handlebars.compile(templateName);
    return template(info);
  }
}

