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
}
