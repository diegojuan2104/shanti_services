import ContractDao from "../Dao";
import helpers from "../../../helpers";

export default class ContractController {
  constructor() {
    this.dao = new ContractDao();
    this.helper = new helpers();
    this.dbFields = {
      0: ["id_document"],
      1: ["id_teacher"]
    };
    this.nonUpdatingFields = ["id_teacher"];
  }

  async findContracts() {
    try {
      const data = await this.dao.findContracts();
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findContracts " + error.message);
    }
  }

  async findContract(params) {
    try {
      const data = await this.dao.findContract([params]);
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findContract " + error.message);
    }
  }

  async createContract(params) {
    try {
      const dbFields = this.helper.checkInsertData(this.dbFields, params);
      await this.dao.createContract(dbFields);
      return { message: "Register created", data: dbFields };
    } catch (error) {
      throw new Error("error while executing createContract " + error.message);
    }
  }

  async updateContract(id, params) {
    try {
      const [strFields, toUpdate] = this.helper.organizedDataToUpdate(
        this.dao.dbFields,
        this.nonUpdatingFields,
        params,
        id
      );
      const rowsUpdated = (await this.dao.updateContract(strFields, toUpdate))
        .rowCount;
      if (rowsUpdated === 0) return { message: "Register not updated" };
      return { message: "Register successfully updated" };
    } catch (error) {
      throw new Error(
        "error while executing update subscription " + error.message
      );
    }
  }

  async deleteContract(params) {
    try {
      await this.dao.deleteContract([params]);
      return { message: "Register deleted", data: params };
    } catch (error) {
      throw new Error("error while executing deleteContract " + error.message);
    }
  }
}
