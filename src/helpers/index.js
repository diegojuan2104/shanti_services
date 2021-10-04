export default class Helpers {
  constructor() {}
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
