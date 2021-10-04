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
      5: ["address", 1],
      6: ["contract", 1],
    };
    this.nonUpdatingFields = ["id_number"];
  }

  async findTeachers() {
    try {
      const data = await this.dao.findTeachers();
      return { message: "Consulted data", data: data.rows };
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
      const dbFields = this.helper.checkInsertData(
        this.dbFields,
        params
      );
      await this.dao.createTeacher(dbFields);
      return { message: "Register created", data: dbFields };
    } catch (error) {
      throw new Error("error while executing createTeacher " + error.message);
    }
  }

  async updateTeacher(id, params) {
    try {
      let avaliableToUpdate = this.dao.dbFields.filter(
        (x) => !this.nonUpdatingFields.includes(x)
      );
      let toUpdate = [id];
      let strFields = "";
      let cont = 2;
      Object.entries(params).forEach(([k, v]) => {
        if (avaliableToUpdate.includes(k)) {
          toUpdate.push(v);
          strFields += `${k} = $${cont},`;
          cont++;
        }
      });
      strFields = strFields.trim().substring(0, strFields.length - 1);
      return await this.dao.updateTeacher(strFields, toUpdate);
    } catch (error) {
      throw new Error(
        "error while executing updateTeacher " + error.message
      ); 
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
