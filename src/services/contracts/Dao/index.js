import db from "../../../db/database";

export default class ContractDao {
  constructor() {
    this.db = new db();
    this.dbFields = [
        "id_document",
        "id_teacher"
      ];
  }

  findContracts() {
    return this.db.executeQuery(
      "select * from contracts where status = 1"
    );
  }

  findContract(params) {
    return this.db.executeQuery(
      "select * from contracts where id_teacher = $1 and status = 1",
      params
    );
  }

  createContract(params) {
    const sql =
      "insert into contracts(id_document, id_teacher) \
        values($1,$2);";
    return this.db.executeQuery(sql, params);
  }

  updateContract(fields, params) {
    const sql = `update contracts set ${fields} where id_teacher = $1;`;
    return this.db.executeQuery(sql, params);
  }

  deleteContract(params) {
    const sql =
      "update contracts set status = 0 where id_teacher = $1";
    return this.db.executeQuery(sql, params);
  }
}
