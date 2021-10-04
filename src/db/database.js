import { Pool } from "pg";
import dbConf from "../config/index"


export default class servicioPG {
  constructor() {
	const DATAENV = dbConf[process.env.NODE_ENV] || dbConf['development']
    console.log(DATAENV)
    this.pool = new Pool(DATAENV);
  }

  async executeQuery(sql, data) {
    let res = this.pool.query(sql, data);
    return res;
  }
}
