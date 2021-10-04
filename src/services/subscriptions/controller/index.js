import SubscriptionDao from "../Dao";
import helpers from "../../../helpers";

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
  }

  async createSubscription(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      const data = await this.dao.create(dataToInsert);
      return { message: "register created", data };
    } catch (error) {
      throw new Error(
        "error while executing create subscription " + error.message
      );
    }
  }
  async getSubscription(id) {
    try {
      let dataToReturn = { message: " operation successfully performed" };
      if (id) dataToReturn["data"] = (await this.dao.findById([id])).rows;
      else dataToReturn["data"] = await this.dao.findByAll().rows;
      return dataToReturn;
    } catch (error) {
      throw new Error(
        "error while executing create subscription " + error.message
      );
    }
  }
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
}
