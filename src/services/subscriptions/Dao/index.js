import db from '../../../db/database'

export default class SubscriptionDao{
    constructor(){
        this.db = new db();
    }

    exampleFunction(params){
        return this.db.executeQuery("query",params);
    }


}