import SubscriptionDao from "../Dao";
import helpers from "../../../helpers";
import MailService from "../../mail/controller";

export default class SubscriptionController {
  constructor() {
    this.dao = new SubscriptionDao();
    this.helper = new helpers();
    this.dataToInsert = {
      0: ["user_id"],
      1: ["class_id"],
      2: ["number_of_classes_paid"],
      3: ["number_of_classes_remaining"],
      4: ["bill_paid"],
    };
    this.nonUpdatingFields = ["id", "date"];
    this.mailService = new MailService();
  }
  /**
   *
   * @param {{String:user_id, String:class_id, String:number_of_classes_paid, String:number_of_classes_remaining, String: bill_paid}} params body of the post request
   *
   * @returns Number of register created
   */
  async createSubscription(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      const data = (await this.dao.create(dataToInsert)).rowCount;
      return { message: "register created", registersCreated: rowCount };
    } catch (error) {
      throw new Error(
        "error while executing create subscription " + error.message
      );
    }
  }
  /**
   * 
   * @param {UUID} id 
   * @returns return the data asked to the database
   */
  async getSubscription(id) {
    try {
      //      await this.mailService.sendMailTo(
      //        "example",
      //        { to: "alejandrosuaza.1022@gmail.com", subject: "welcome" },
      //        { name: "pepe", link: "http://example" },
      //        "servicesappemail@gmail.com",
      //        "Thebest123,"
      //      );
      let dataToReturn = { message: " operation successfully performed" };
      if (id) dataToReturn["data"] = (await this.dao.findById([id])).rows;
      else dataToReturn["data"] = (await this.dao.findByAll()).rows;
      return dataToReturn;
    } catch (error) {
      throw new Error(
        "error while executing create subscription " + error.message
      );
    }
  }
  /**
   * 
   * @param {UUID} id 
   * @param {Object} params data fields to update  
   * @returns number of rows affected
   */
  async updateSubscription(id, params) {
    try {
      const [strFields, toUpdate] = this.helper.organizedDataToUpdate(
        this.dao.dbFields,
        this.nonUpdatingFields,
        params,
        id
      );
      const rowsUpdated = (await this.dao.update(strFields, toUpdate)).rowCount;
      if (rowsUpdated === 0) return { message: " register  not updated " };
      return { message: " register successfully updated " };
    } catch (error) {
      throw new Error(
        "error while executing update subscription " + error.message
      );
    }
  }
  /**
   * 
   * @param {UUID} id 
   * @returns number of rows deleted
   */
  async deleteSubscription(id) {
    try {
      const rowsDeleted = (await this.dao.delete([id])).rowCount;
      if (rowsDeleted === 0) return { message: "not rows deleted " };
      return { message: " registers successfully deleted " };
    } catch (error) {
      throw new Error(
        "error while executing update subscription " + error.message
      );
    }
  }
}
