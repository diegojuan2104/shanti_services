import db from '../../../db/database'

export default class ScheduleDao{
    constructor(){
        this.db = new db();
    }

    findSchedules(){
        return this.db.executeQuery("SELECT * FROM schedules");
    }
}