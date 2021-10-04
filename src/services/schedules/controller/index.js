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
  }

  async findSchedules() {
    try {
      const data = await this.dao.findSchedules();
      return { message: "Schedules list:", data };
    }
    catch (error) {
      throw new Error("error while executing findSchedules " + error.message);
    }
  }

  async findScheduleById(id) {
    try {
      const data = await this.dao.findScheduleById(id);
      return { message: "Schedule:", data };
    }
    catch (error) {
      throw new Error("error while executing findScheduleById " + error.message);
    }
  }

  async insertSchedules(params) {
    try {
      const dataToInsert = this.helper.checkInsertData(
        this.dataToInsert,
        params
      );
      console.log(dataToInsert)
      await this.dao.insertSchedules(dataToInsert);
      return { message: "Register created" };
    }
    catch (error) {
      console.log(error)
      throw new Error("error while executing insertSchedules " + error.message);
    }
  }

  async deleteScheduleById(id) {
    try {
      this.dao.deleteScheduleById(id);
      return { message: "Successful delete" };
    }
    catch (error) {
      throw new Error("error while executing deleteScheduleById " + error.message);
    }
  }
}
