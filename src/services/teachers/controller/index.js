import TeacherDao from "../Dao";

export default class TeacherController {
  constructor() {
    this.dao = new TeacherDao();
  }

  async findTeachers() {
    try {
      const data = await this.dao.findTeachers();
      return { message: "Profesores consultados", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findTeachers " + error.message);
    }
  }

}
