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
  /**
   * Method that finds all the contracts
   * @returns {Object} with a message and a list with all the contracts
   */
  async findContracts() {
    try {
      const data = await this.dao.findContracts();
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findContracts " + error.message);
    }
  }

  /**
   * Method that finds a contract
   * @param {String} params receive a teacher ID
   * @returns {Object} with a message and the found contract
   */
  async findContract(params) {
    try {
      const data = await this.dao.findContract([params]);
      return { message: "Consulted data", data: data.rows };
    } catch (error) {
      throw new Error("error while executing findContract " + error.message);
    }
  }

  /**
   * Method that create a contract
   * @param {Object} params receive a contract information
   * @returns {Object} with a message and data agregated
   */
  async createContract(params) {
    try {
      const dbFields = this.helper.checkInsertData(this.dbFields, params);
      await this.dao.createContract(dbFields);
      return { message: "Register created", data: dbFields };
    } catch (error) {
      throw new Error("error while executing createContract " + error.message);
    }
  }

  /**
   * Method that updates a contract
   * @param {String} id receive a teacher ID
   * @param {Object} params receive the fields to update
   * @returns {Object} with a result message
   */
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

  /**
   * Method that delete a contract
   * @param {String} params 
   * @returns {Object} with a result message
   */
  async deleteContract(params) {
    try {
      await this.dao.deleteContract([params]);
      return { message: "Register deleted", data: params };
    } catch (error) {
      throw new Error("error while executing deleteContract " + error.message);
    }
  }
}
