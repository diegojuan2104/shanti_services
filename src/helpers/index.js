export default class Helpers {
  constructor() {}
  /**
   * 
   * @param {Object} dataToInsert data requiredto insert into the db
   * @param {Object} data to verify to insert into the db
   * @returns Array of object to insert into the db
   */
  checkInsertData(dataToInsert, data) {
    let arrayData = [];
    Object.entries(dataToInsert).forEach(([k, v]) => {
      const dataValue = data[v[0]];
      if (!dataValue && !dataToInsert[k][1])
        throw new Error("param required " + v + " not existing");
      arrayData.splice(k, 0, data[v[0]]);
    });
    return arrayData;
  }
  /**
   * 
   * @param {Array} dbFields fields of the table into the db 
   * @param {Array} nonUpdatingFields  
   * @param {Object} params data to verify to update the register into the db
   * @param {UUID} id register to update 
   * @returns Array with the data allowed to be updated
   */
  organizedDataToUpdate(dbFields, nonUpdatingFields, params, id) {
    let avaliableToUpdate = dbFields.filter(
      (x) => !nonUpdatingFields.includes(x)
    );
    let toUpdate = [id];
    let strFields = "";
    let cont = 2;
    Object.entries(params).forEach(([k, v]) => {
      if (avaliableToUpdate.includes(k)) {
        toUpdate.push(v);
        strFields += `${k} = $${cont},`;
        cont++;
      }
    });
    strFields = strFields.trim().substring(0, strFields.length - 1);
    return [strFields, toUpdate];
  }
}
