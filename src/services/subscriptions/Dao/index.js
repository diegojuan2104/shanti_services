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

  create(params) {
    const sqlQuery =
      "insert into subscriptions(user_id, class_id, \
            number_of_classes_paid, number_of_classes_remaining, bill_paid)  \
        values($1,$2,$3,$4,$5);";
    return this.db.executeQuery(sqlQuery, params);
  }
  findById(id) {
    const sqlQuery = "select * from subscriptions where id = $1";
    return this.db.executeQuery(sqlQuery, id);
  }
  findByAll() {
    const sqlQuery = "select * from subscriptions";
    return this.db.executeQuery(sqlQuery);
  }
  update(fields, params) {
    const sqlQuery = `update subscriptions set ${fields} where id = $1;`;
    return this.db.executeQuery(sqlQuery, params);
  }
}
