import SubscriptionDao from "../Dao";

export default class SubscriptionController {
  constructor() {
    this.dao = new SubscriptionDao();
    this.insert_data = {
      0: "user_id",
      1: "class_id",
      2: "number_of_classes_paid",
      3: "number_of_classes_remaining",
      4: "bill_paid",
      5: "my_date",
    };
    //this.daoStudents = new StudentsDao();
  }

  async exampleFunction(params) {
    try {
      const data = await this.dao.exampleFunction(params);
      return { message: "melo", data };
    } catch (error) {
      throw new Error("error while executing exampleFunction " + error.message);
    }
  }
  checkInsertData(data) {
    let arrayData = [];
    this.insert_data.forEach((v, k) => {
      if (!data[v]) throw new Error("param required not existing " + v);
      arrayData.splice(k, 0, data[v]);
    });
  }
}
