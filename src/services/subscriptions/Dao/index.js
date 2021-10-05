import db from "../../../db/database";

export default class SubscriptionDao {
  constructor() {
    this.db = new db();
    this.dbFields = [
      "id",
      "user_id",
      "class_id",
      "number_of_classes_paid",
      "number_of_classes_remaining",
      "bill_paid",
      "my_date",
    ];
  }
  /**
   * Recive an array of data to insert to the database.
   * @param {Array} params 
   * @returns the status of the current db operation
   */
  create(params) {
    const sqlQuery =
      "insert into subscriptions(user_id, class_id, \
            number_of_classes_paid, number_of_classes_remaining, bill_paid)  \
        values($1,$2,$3,$4,$5);";
    console.log(params);
    return this.db.executeQuery(sqlQuery, params);
  }
  /**
   * 
   * @param {UUID} id 
   * @returns the status of the current db operation
   */
  findById(id) {
    const sqlQuery = "select * from subscriptions where id = $1 and state = 1";
    return this.db.executeQuery(sqlQuery, id);
  }
  /**
   * 
   * @returns the status of the current db operation
   */
  findByAll() {
    const sqlQuery = "select * from subscriptions where state = 1";
    return this.db.executeQuery(sqlQuery);
  }
  /**
   * 
   * @param {String} fields to update
   * @param {Array} params 
   * @returns the status of the current db operation 
   */
  update(fields, params) {
    const sqlQuery = `update subscriptions set ${fields} where id = $1 and state != 1;`;
    return this.db.executeQuery(sqlQuery, params);
  }
  /**
   * 
   * @param {UUID} id 
   * @returns the status of the current db operation
   */
  delete(id) {
    const sqlQuery = "update subscriptions set state = 0 where id = $1";
    return this.db.executeQuery(sqlQuery, id);
  }
}
