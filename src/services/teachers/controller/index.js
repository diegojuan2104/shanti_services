import TeacherDao from "../Dao";

export default class TeacherController {
  constructor() {
    this.dao = new TeacherDao();
    //this.daoStudents = new StudentsDao();
  }

  async findTeachers() {
    try {
      const data = await this.dao.findTeachers( );
      return { message: "Techers list: ", data };
    } catch (error) {
      throw new Error("error while executing findTeachers " + error.message);
    }
  }

}
