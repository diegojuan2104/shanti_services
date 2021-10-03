import { Pool } from "pg";
import dbConf from "../config/index"
require("dotenv").config({ path: "variables.env" });


export default class servicioPG {
  constructor() {
	const DATAENV = dbConf[process.env.NODE_ENV] || 'development'
    this.pool = new Pool(DATAENV);
  }

  async executeQuery(sql, data) {
    let res = this.pool.query(sql, data);
    return res;
  }
}
