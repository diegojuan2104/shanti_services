import ScheduleDao from "../Dao";
import helpers from "../../../helpers";
export default class ScheduleController {
  constructor() {
    this.dao = new ScheduleDao();
    this.helper = new helpers();
    this.dataToInsert = {
      0: ["schedule_day"],
      1: ["initial_hour"],
      2: ["final_hour"],
      3: ["available"]
    };

    this.nonUpdatingFields = ["id"];
  }

  async findSchedules() {
    try {
      const data = await this.dao.findAll();
      return { message: "Schedules list:", data };
    }
    catch (error) {
      throw new Error("error while executing findSchedules " + error.message);
    }
  }

  async findScheduleById(id) {
    try {
      const data = await this.dao.findById([id]);
      return { message: "Schedule:", data: data.rows };
    }
    catch (error) {
      throw new Error("error while executing findScheduleById " + error.message);
    }
  }

  async insertSchedule(params) {
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
      throw new Error("error while executing insertSchedules " + error.message);
    }
  }

  async updateSchedule(id, params) {
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

  async deleteSchedule(id) {
    try {
      this.dao.delete([id]);
      return { message: "Successful delete" };
    }
    catch (error) {
      throw new Error("error while executing deleteScheduleById " + error.message);
    }
  }
}
