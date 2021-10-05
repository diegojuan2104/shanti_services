import db from "../../../db/database";

export default class ContractDao {
  constructor() {
    this.db = new db();
    this.dbFields = [
        "id_document",
        "id_teacher"
      ];
  }
  
  /**
   * @returns the status of the current db operation
   */
  findContracts() {
    return this.db.executeQuery(
      "select * from contracts where status = 1"
    );
  }

  /**
   * @param { String } id_teacher
   * @returns the status of the current db operation
   */
  findContract(params) {
    return this.db.executeQuery(
      "select * from contracts where id_teacher = $1 and status = 1",
      params
    );
  }

  /**
   * Recive an array of data to insert to the database.
   * @param {Array} params 
   * @returns the status of the current db operation
   */
  createContract(params) {
    const sql =
      "insert into contracts(id_document, id_teacher) \
        values($1,$2);";
    return this.db.executeQuery(sql, params);
  }

  /**
   * @param {String} fields to update
   * @param {Array} params 
   * @returns the status of the current db operation 
   */
  updateContract(fields, params) {
    const sql = `update contracts set ${fields} where id_teacher = $1;`;
    return this.db.executeQuery(sql, params);
  }

  /**
   * @param {String} id_teacher 
   * @returns the status of the current db operation
   */
  deleteContract(params) {
    const sql =
      "update contracts set status = 0 where id_teacher = $1";
    return this.db.executeQuery(sql, params);
  }
}
