import ClassDao from "../Dao";
import helpers from "../../../helpers";
export default class ClassController {
  constructor() {
    this.dao = new ClassDao();
    this.helper = new helpers();
    this.dataToInsert = {
      0: ["class_name"],
      1: ["teacher_id"],
      2: ["schedule_id"],
      3: ["aditional_information"]
    };

    this.nonUpdatingFields = ["id"];
  }

  /**
   * 
   * 
   * @returns class
   * 
   * @memberOf ClassController
   */
  async findClasses() {
    try {
      const data = await this.dao.findAll();
      return { message: "Classes list:", data };
    }
    catch (error) {
      throw new Error("error while executing findClasses" + error.message);
    }
  }

  /**
   * 
   * @param {String} id 
   * @returns a specific class
   * 
   * @memberOf ClassController
   */
  async findClassById(id) {
    try {
      const data = await this.dao.findById([id]);
      return { message: "Class:", data: data.rows };
    }
    catch (error) {
      throw new Error("error while executing findClassById " + error.message);
    }
  }

  /**
   * 
   * @param {Object} params 
   * @returns class inserted
   * 
   * @memberOf ClassController
   */
  async insertClass(params) {
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
      throw new Error("error while executing insertClass " + error.message);
    }
  }

  /**
   * @param {String} id 
   * @param {Object} params 
   * @returns class updated 
   * 
   * @memberOf ClassController
   */
  async updateClass(id, params) {
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
   * @param {String} id 
   * @returns class deleted
   * 
   * @memberOf ClassController
   */
  async deleteClass(id) {
    try {
      this.dao.delete([id]);
      return { message: "Successful delete" };
    }
    catch (error) {
      throw new Error("error while executing deleteClassById " + error.message);
    }
  }
}
