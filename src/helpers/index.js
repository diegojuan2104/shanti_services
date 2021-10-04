export default class Helpers {
  constructor() {}
  checkInsertData(dataToInsert,data) {
    let arrayData = [];
    Object.entries(dataToInsert).forEach(([k, v]) => {
      console.log(v);
      if (!data[v]) throw new Error("param required " + v + " not existing");
      arrayData.splice(k, 0, data[v]);
    });
    return arrayData;
  }
}
