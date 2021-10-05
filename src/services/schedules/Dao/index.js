import db from '../../../db/database'

export default class ScheduleDao {
    constructor() {
        this.db = new db();
        this.dbFields = [
            "id",
            "schedule_day",
            "initial_hour",
            "final_hour",
            "available",
          ];
    }

    /**
     * @returns 
     * 
     * @memberOf ScheduleDao
     */
    findAll() {
        return this.db.executeQuery("SELECT * FROM schedules WHERE status != 0");
    }

    /**
     * 
     * @param {String} id 
     * @returns 
     * 
     * @memberOf ScheduleDao
     */
    findById(id) {
        console.log(id)
        const sql = 'SELECT * FROM schedules WHERE id = $1 AND status != 0;';
        return this.db.executeQuery(sql, id);
    }

    /**
     * 
     * @param {Object} params 
     * @returns 
     * @memberOf ScheduleDao
     */
    insert(params) {
        const sql = "INSERT INTO schedules(schedule_day, initial_hour, final_hour, available) values($1,$2,$3,$4);";
        return this.db.executeQuery(sql, params);
    }
    /**
     * 
     * @param {List} fields 
     * @param {Object} params 
     * @returns 
     * @memberOf ScheduleDao
     */
    update(fields, params) {
        const sqlQuery = `update schedules set ${fields} where id = $1;`;
        return this.db.executeQuery(sqlQuery, params);
      }

    /**
     * @param {String} id 
     * @returns 
     * @memberOf ScheduleDao
     */
    delete(id) {
        return this.db.executeQuery(`UPDATE schedules SET status = 0 WHERE id = $1` , id);
    }
}