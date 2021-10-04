import db from "../../../db/database";

export default class TeacherDao {
  constructor() {
    this.db = new db();
  }

  findTeachers() {
    return this.db.executeQuery(
      "select * from teachers where status = 1"
    );
  }

  findTeacher(params) {
    return this.db.executeQuery(
      "select * from teachers where id_number = $1 and status = 1",
      params
    );
  }

  createTeacher(params) {
    const sql =
      "insert into teachers(id_number, first_name, \
        last_name, email, phone, address, contract) \
        values($1,$2,$3,$4,$5,$6, $7);";
    return this.db.executeQuery(sql, params);
  }

  updateTeacher(params) {
    const sql =
      "update teachers set first_name = $2, last_name = $3,\
        email = $4, phone = $5, address = $6, contract = $7 where id_number = $1";
    return this.db.executeQuery(sql, params);
  }

  deleteTeacher(params) {
    const sql =
      "update teachers set status = 0 where id_number = $1";
    return this.db.executeQuery(sql, params);
  }
}
