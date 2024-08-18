import Customer from "./customer";
import IBranch from "./interfaces/IBranch";
import ICustomer from "./interfaces/ICustomer";

class Branch implements IBranch {
  private customers: ICustomer[] = [];

  /**
   *
   * @param {string} name - The name of the branch.
   */
  constructor(private name: string) {
    this.customers = [];
  }
  /**
   * Gets the name of the branch.
   * @returns {string} The name of the branch.
   */
  getName(): string {
    return this.name;
  }
  /**
   * Gets the customers of the branch.
   * @returns {ICustomer[]} The customers of the branch.
   */
  getCustomers(): ICustomer[] {
    return this.customers;
  }
  /**
   * Adds a customer to the branch.
   * @param {ICustomer} customer - The customer to add.
   * @returns {Boolean}  - True if the customer was added, false otherwise.
   * @description Adds the customer to the customers array. Each customer should only be added once.
   */
  addCustomer(customer: ICustomer): boolean {
    if (
      customer instanceof Customer &&
      !this.customers.some((c: ICustomer) => c.getId() === customer.getId())
    ) {
      this.customers.push(customer);
      return true;
    }

    return false;
  }
  /**
   * Adds a transaction to a customer.
   * @param {number} customerId - The id of the customer.
   * @param {number} amount - The amount of the transaction.
   * @returns {Boolean}  - True if the transaction was added, false otherwise.
   * @description Adds a transaction of the amount for the customer with the specified customerId.
   */
  addCustomerTransaction(customerId: number, amount: number): boolean {
    const customer = this.customers.find(
      (customer: ICustomer) => customer.getId() === customerId
    );

    if (customer) {
      customer.addTransactions(amount);
      return true;
    }

    return false;
  }
}

export default Branch;
