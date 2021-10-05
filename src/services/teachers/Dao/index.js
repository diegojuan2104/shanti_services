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

  /**
   * @returns the status of the current db operation
   */
  findTeachers() {
    return this.db.executeQuery(
      "select * from teachers where status = 1"
    );
  }

  /**
   * @param { String } id_number
   * @returns the status of the current db operation
   */
  findTeacher(params) {
    return this.db.executeQuery(
      "select * from teachers where id_number = $1 and status = 1",
      params
    );
  }

  /**
   * Recive an array of data to insert to the database.
   * @param {Array} params 
   * @returns the status of the current db operation
   */
  createTeacher(params) {
    const sql =
      "insert into teachers(id_number, first_name, \
        last_name, email, phone, address) \
        values($1,$2,$3,$4,$5,$6);";
    return this.db.executeQuery(sql, params);
  }

  /**
   * @param {String} fields to update
   * @param {Array} params 
   * @returns the status of the current db operation 
   */
  updateTeacher(fields, params) {
    const sql = `update teachers set ${fields} where id_number = $1;`;
    console.log(sql)
    return this.db.executeQuery(sql, params);
  }

  /**
   * @param {String} id_number 
   * @returns the status of the current db operation
   */
  deleteTeacher(params) {
    const sql =
      "update teachers set status = 0 where id_number = $1";
    return this.db.executeQuery(sql, params);
  }
}
