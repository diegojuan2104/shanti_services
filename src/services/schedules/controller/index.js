import ScheduleDao from "../Dao";

export default class ScheduleController {
  constructor() {
    this.dao = new ScheduleDao();
  }

  async findSchedules(params) {
    try {
    const data = await this.dao.findSchedules(params);
    return { message: "Schedules list:", data };
    }
    catch (error){
        throw new Error("error while executing findSchedules " + error.message);
    }
  }


  async insertSchedules(params) {
    try {
    const data = await this.dao.findSchedules(params);
    return { message: "Schedules list:", data };
    }
    catch (error){
        throw new Error("error while executing findSchedules " + error.message);
    }
  }
}
