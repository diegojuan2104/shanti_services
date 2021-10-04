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
      5: ["my_date"],
    };
    //this.daoStudents = new StudentsDao();
  }

  async createSubscription(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );

      return { dataToInsert: dataToInsert };
      //const data = await this.dao.create(dataToInsert);
      return { message: "register created", data };
    } catch (error) {
      throw new Error("error while executing exampleFunction " + error.message);
    }
  }
}
