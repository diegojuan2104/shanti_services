import TeacherDao from "../Dao";
import helpers from "../../../helpers";

export default class TeacherController {
  constructor() {
    this.dao = new TeacherDao();
    this.helper = new helpers();
    this.dbFields = {
      0: ["id_number"],
      1: ["first_name"],
      2: ["last_name"],
      3: ["email"],
      4: ["phone", 1],
      5: ["address", 1]
    };
    this.nonUpdatingFields = ["id_number"];
  }

  /**
   * Method that finds all the teachers
   * @returns json with a message and a list with all the teachers
   */
  async findTeachers() {
    try {
      const data = await this.dao.findTeachers();
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findTeachers " + error.message);
    }
  }

  /**
   * Method that finds a teacher
   * @param {*} params receive a teacher ID
   * @returns json with a message and the found teacher
   */
  async findTeacher(params) {
    try {
      const data = await this.dao.findTeacher([params]);
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findTeacher " + error.message);
    }
  }

  /**
   * Method that create a teacher
   * @param {*} params receive a teacher information
   * @returns json with a message and data agregated
   */
  async createTeacher(params) {
    try {
      const dbFields = this.helper.checkInsertData(this.dbFields, params);
      await this.dao.createTeacher(dbFields);
      return { message: "Register created", data: dbFields };
    } catch (error) {
      throw new Error("error while executing createTeacher " + error.message);
    }
  }
  
  /**
   * Method that updates a teacher
   * @param {*} id receive a teacher ID
   * @param {*} params receive the fields to update
   * @returns Json with a result message
   */
  async updateTeacher(id, params) {
    try {
      const [strFields, toUpdate] = this.helper.organizedDataToUpdate(
        this.dao.dbFields,
        this.nonUpdatingFields,
        params,
        id
      );
      const rowsUpdated = (await this.dao.updateTeacher(strFields, toUpdate))
        .rowCount;
      if (rowsUpdated === 0) return { message: "Register not updated" };
      return { message: "Register successfully updated" };
    } catch (error) {
      throw new Error(
        "error while executing update subscription " + error.message
      );
    }
  }

  /**
   * Methos that delete a teacher
   * @param {*} params 
   * @returns Json with a result message
   */
  async deleteTeacher(params) {
    try {
      await this.dao.deleteTeacher([params]);
      return { message: "Register deleted", data: params };
    } catch (error) {
      throw new Error("error while executing deleteTeacher " + error.message);
    }
  }
}
