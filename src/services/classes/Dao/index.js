import db from '../../../db/database'

export default class ClassDao {
    constructor() {
        this.db = new db();
        this.dbFields = [
            "id",
            "class_name",
            "teacher_id",
            "schedule_id",
            "aditional_information",
        ];
    }

    /**
     * @returns query
     * 
     * @memberOf ClassDao
     */
    findAll() {
        return this.db.executeQuery(`SELECT classes.id,class_name,teacher_id, schedule_id,aditional_information, 
        CONCAT(teachers.first_name,' ',teachers.last_name) as teacher, schedules.schedule_day as day, 
        CONCAT(schedules.initial_hour,' - ',schedules.final_hour) as hour
        FROM classes 
        INNER JOIN teachers ON classes.teacher_id = teachers.id 
        INNER JOIN schedules ON classes.schedule_id = schedules.id 
        WHERE classes.status != 0;`);
    }

    /**
     * 
     * 
     * @param {String} id 
     * @returns query
     * 
     * @memberOf ClassDao
     */
    findById(id) {
        console.log(id)
        const sql = `SELECT classes.id,class_name,teacher_id, schedule_id,aditional_information, 
        CONCAT(teachers.first_name,' ',teachers.last_name) as teacher, schedules.schedule_day as day, 
        CONCAT(schedules.initial_hour,' - ',schedules.final_hour) as hour
        FROM classes 
        INNER JOIN teachers ON classes.teacher_id = teachers.id 
        INNER JOIN schedules ON classes.schedule_id = schedules.id 
        WHERE classes.id = $1 AND classes.status != 0;`;
        return this.db.executeQuery(sql, id);
    }

    insert(params) {
        const sql = "INSERT INTO classes(class_name, teacher_id, schedule_id, aditional_information) values($1,$2,$3,$4);";
        return this.db.executeQuery(sql, params);
    }
    update(fields, params) {
        console.log(params)
        const sqlQuery = `update classes set ${fields} where id = $1;`;
        return this.db.executeQuery(sqlQuery, params);
    }

    delete(id) {
        return this.db.executeQuery("UPDATE classes SET status = 0 WHERE id = $1;", id);
    }
}