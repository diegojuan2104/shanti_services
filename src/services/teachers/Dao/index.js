import db from "../../../db/database";

export default class TeacherDao {
  constructor() {
    this.db = new db();
    this.dbFields = [
        "id_number",
        "first_name",
        "last_name",
        "email",
        "phone",
        "address"
      ];
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
        last_name, email, phone, address) \
        values($1,$2,$3,$4,$5,$6);";
    return this.db.executeQuery(sql, params);
  }

  updateTeacher(fields, params) {
    const sql = `update teachers set ${fields} where id_number = $1;`;
    console.log(sql)
    return this.db.executeQuery(sql, params);
  }

  deleteTeacher(params) {
    const sql =
      "update teachers set status = 0 where id_number = $1";
    return this.db.executeQuery(sql, params);
  }
}
