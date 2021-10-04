import TeacherDao from "../Dao";
import helpers from "../../../helpers";

export default class TeacherController {
  constructor() {
    this.dao = new TeacherDao();
    this.helper = new helpers();
    this.dataToInsert = {
      0: ["id_number"],
      1: ["first_name"],
      2: ["last_name"],
      3: ["email"],
      4: ["phone", 1],
      5: ["address", 1],
      6: ["contract", 1],
    };
  }

  async findTeachers() {
    try {
<<<<<<< HEAD
      const data = await this.dao.findTeachers( );
      return { message: "Techers list: ", data };
=======
      const data = await this.dao.findTeachers();
      return { message: "Consulted data", data: data.rows };
>>>>>>> 319eb04856ea389af97b44dacd04355ac38452ed
    } catch (error) {
      throw new Error("error while executing findTeachers " + error.message);
    }
  }

  async findTeacher(params) {
    try {
      const data = await this.dao.findTeacher([params]);
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findTeacher " + error.message);
    }
  }

  async createTeacher(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      await this.dao.createTeacher(dataToInsert);
      return { message: "Register created", data: dataToInsert };
    } catch (error) {
      throw new Error("error while executing createTeacher " + error.message);
    }
  }

  async updateTeacher(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      await this.dao.updateTeacher(dataToInsert);
      return { message: "Register updated", data: dataToInsert };
    } catch (error) {
      throw new Error("error while executing updateTeacher " + error.message);
    }
  }

  async deleteTeacher(params) {
    try {
      await this.dao.deleteTeacher([params]);
      return { message: "Register deleted", data: params };
    } catch (error) {
      throw new Error("error while executing deleteTeacher " + error.message);
    }
  }
}
