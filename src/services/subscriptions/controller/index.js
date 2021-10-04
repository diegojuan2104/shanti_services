import SubscriptionDao from "../Dao";
import helpers from "../../../helpers";

export default class SubscriptionController {
  constructor() {
    this.dao = new SubscriptionDao();
    this.helper = new helpers();
  }
  //this.daoStudents = new StudentsDao();

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



