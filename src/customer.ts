import ICustomer from "./interfaces/ICustomer";
import ITransaction from "./interfaces/ITransaction";
import Transaction from "./transaction";

/**
 * Represents a Customer
 * @class
 */
class Customer implements ICustomer {
  private transactions: ITransaction[] = [];

  /**
   * Creates a customer.
   * @param {string} name - The name of the customer.
   * @param {number} id - The id of the customer.
   */
  constructor(private name: string, private id: number) {
    this.transactions = [];
  }
  /**
   * Gets the name of the customer.
   * @returns {string} The name of the customer.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Gets the id of the customer.
   * @returns {number} The id of the customer.
   */
  getId(): number {
    return this.id;
  }
  /**
   * Gets the transactions of the customer.
   * @returns {ITransaction[]} The transactions of the customer.
   */
  getTransactions(): ITransaction[] {
    return this.transactions;
  }
  /**
   * Gets the balance of the customer.
   * @returns {number} The balance of the customer.
   */
  getBalance(): number {
    return this.transactions.reduce((currentTotal, transaction) => {
      return currentTotal + transaction.amount;
    }, 0);
  }
  /**
   * Adds a transaction to the customer.
   * @param {number} amount - The transaction to add.
   * @returns {Boolean}  - True if the transaction was added, false otherwise.
   * @description Adds a successful transaction of the amount to the transactions array.
   * */
  addTransactions(amount: number): boolean {
    const currentBalance = this.getBalance();

    if (!(amount !== 0 && currentBalance + amount < 0)) {
      const transaction: ITransaction = new Transaction(amount, new Date()); //Loosely coupled
      this.transactions.push(transaction);
      return true;
    }
    return false;
  }
}

export default Customer;
