import SubscriptionDao from "../Dao";

export default class SubscriptionController {
  constructor() {
    this.dao = new SubscriptionDao();
    //this.daoStudents = new StudentsDao();
  }

  async exampleFunction(params) {
    try {
    //logic
    //something with the students
    //await this.daoStudens.function(params)
    const data = await this.dao.exampleFunction(params);
    return { message: "melo", data };
    }
    catch (error){
        throw new Error("error while executing exampleFunction " + error.message);
    }
  }
}
