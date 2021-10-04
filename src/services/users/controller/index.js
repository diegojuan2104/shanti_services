import UserDao from "../Dao";
import helpers from "../../../helpers";
export default class UserController {
  constructor() {
    this.dao = new UserDao();
    this.helper = new helpers();
    this.dataToInsert = {
      0: ["first_name"],
      1: ["last_name"],
      2: ["phone"],
      3: ["address"],
      4: ["email"],
      5: ["doc_number"],
      6: ["aditional_information",1]
    };
    
    this.nonUpdatingFields = ["id","doc_number"];
  }

  async findUsers() {
    try {
      const data = await this.dao.findAll();
      return { message: "Users list:", data };
    }
    catch (error) {
      throw new Error("error while executing findUsers" + error.message);
    }
  }

  async findUserById(id) {
    try {
      const data = await this.dao.findById([id]);
      return { message: "User:", data: data.rows };
    }
    catch (error) {
      throw new Error("error while executing findUserById " + error.message);
    }
  }

  async updateUser(id, params) {
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

  async insertUser(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      console.log(dataToInsert)
      await this.dao.insert(dataToInsert);
      return { message: "Register created" };
    }
    catch (error) {
      console.log(error)
      throw new Error("error while executing insertUser " + error.message);
    }
  }

  async deleteUser(id) {
    try {
      this.dao.delete([id]);
      return { message: "Successful delete" };
    }
    catch (error) {
      throw new Error("error while executing deleteUser " + error.message);
    }
  }
}
