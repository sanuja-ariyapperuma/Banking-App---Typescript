import ITransaction from "./interfaces/ITransaction";

/**
 * Represents a transaction.
 * @class
 */
class Transaction implements ITransaction {
  /**
   * Creates a transaction.
   * @param {number} amount - The amount of the transaction.
   * @param {Date} date - The date of the transaction.
   */
  constructor(public amount: number, public date: Date) {
    if (!(Number.isInteger(amount) && date instanceof Date)) {
      throw new Error("Amount must be a number or date must be a Date object");
    }
  }
}

export default Transaction;
