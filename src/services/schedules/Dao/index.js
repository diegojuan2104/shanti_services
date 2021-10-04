import db from '../../../db/database'

export default class ScheduleDao {
    constructor() {
        this.db = new db();
    }

    findSchedules() {
        return this.db.executeQuery("SELECT * FROM schedules");
    }

    insertSchedules(params) {
        const sql = "INSERT INTO schedules(schedule_day, initial_hour, final_hour, available) values($1,$2,$3,$4);";
        return this.db.executeQuery(sql, params);
    }

    findScheduleById(id) {
        return this.db.executeQuery(`SELECT * FROM schedules WHERE id = ${id}`);
    }

    deleteScheduleById(id) {
        return this.db.executeQuery(`DELETE FROM schedules WHERE id = ${id}`);
    }
}