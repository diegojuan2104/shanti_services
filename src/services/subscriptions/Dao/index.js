import db from "../../../db/database";

export default class SubscriptionDao {
  constructor() {
    this.db = new db();
  }

  createSubscription(params) {
    "insert into pu_publicacion_revision(user_id, class_id, \
            number_of_classes_paid, number_of_classes_remaining, bill_paid, my_date, \
        values($1,$2,$3,$4,$5,$6);";
    return this.db.executeQuery("insert into subscriptions", params);
  }
}
