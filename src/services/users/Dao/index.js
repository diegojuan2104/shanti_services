import db from '../../../db/database'

export default class UserDao {
    constructor() {
        this.db = new db();
        this.dbFields = [
            "id",
            "first_name",
            "last_name",
            "phone",
            "address",
            "email",
            "doc_number",
            "aditional_data"
        ];
    }

    findAll() {
        return this.db.executeQuery("SELECT * FROM users WHERE status != 0");
    }

    findById(id) {
        console.log(id)
        const sql = 'SELECT * FROM users WHERE id = $1 AND status != 0;';
        return this.db.executeQuery(sql, id);
    }

    insert(params) {
        const sql = `INSERT INTO users(first_name, last_name, 
            phone, address,email,doc_number,aditional_information) values($1,$2,$3,$4,$5,$6,$7);`;
        return this.db.executeQuery(sql, params);
    }
    update(fields, params) {
        const sqlQuery = `update users set ${fields} where id = $1;`;
        return this.db.executeQuery(sqlQuery, params);
    }

    delete(id) {
        return this.db.executeQuery(`UPDATE users SET status = 0 WHERE id = $1`, id);
    }
}