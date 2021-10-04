import db from '../../../db/database'

export default class TeacherDao{
    constructor(){
        this.db = new db();
    }

    findTeachers(){
        return this.db.executeQuery("select * from teachers");
    }

}