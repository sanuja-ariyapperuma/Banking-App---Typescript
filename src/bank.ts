import IBank from "./interfaces/IBank";
import IBranch from "./interfaces/IBranch";
import ICustomer from "./interfaces/ICustomer";

class Bank implements IBank {
  private branches: IBranch[] = [];

  /**
   * Creates a bank.
   * @param {string} name - The name of the bank.
   */
  constructor(private name: string) {
    if (name.trim().length === 0) {
      throw new Error("Name must not be empty");
    }
    this.branches = [];
  }

  /**
   *
   * @param {IBranch} branch
   * @returns {Boolean}  - True if the branch was added, false otherwise.
   * @description Adds the branch to the branches array. Each branch should only be added once.
   */
  addBranch(branch: IBranch): boolean {
    if (!this.branches.some((b: IBranch) => b.getName() === branch.getName())) {
      this.branches.push(branch);
      return true;
    }
    return false;
  }
  /**
   *
   * @param {IBranch} branch
   * @param {ICustomer} customer
   * @returns {Boolean}  - True if the customer was added, false otherwise.
   * @description Adds the customer to the branch of the bank. Each customer can only be added once to a branch.
   */
  addCustomer(branch: IBranch, customer: ICustomer): boolean {
    return this.checkBranch(branch) && branch.addCustomer(customer);
  }
  /**
   *
   * @param {IBranch} branch
   * @param {number} customerId
   * @param {number} amount
   * @returns {Boolean} - True if the transaction was added, false otherwise.
   * @description Adds a transaction of the amount for the customer with the specified customerId in the given branch.
   */
  addCustomerTransaction(
    branch: IBranch,
    customerId: number,
    amount: number
  ): boolean {
    return (
      this.checkBranch(branch) &&
      branch.addCustomerTransaction(customerId, amount)
    );
  }
  /**
   *
   * @param {string} branchName
   * @returns {IBranch[] | null} If branches available return Branch [], null otherwise.
   * @description Returns a list of matched branches with the specified branchName or null if no matches were found.
   */
  findBranchByName(branchName: string): IBranch[] | null {
    return this.branches.filter((branch: IBranch) => {
      return branch.getName().toLowerCase().includes(branchName.toLowerCase());
    });
  }
  /**
   * @param {IBranch} branch
   * @returns {Boolean}  - True if the branch was removed, false otherwise.
   * @description Returns true if the branch belongs to the bank or false otherwise.
   */
  checkBranch(branch: IBranch): boolean {
    return this.branches.includes(branch);
  }
  /**
   * @param {IBranch} branch
   * @param {Boolean} includeTransactions
   * @returns {void}
   * @description Prints out a list of customers with their transaction details if includeTransactions is true.
   */
  listCustomers(branch: IBranch, includeTransactions: Boolean): void {
    if (this.checkBranch(branch)) {
      branch.getCustomers().forEach((customer) => {
        console.log(` Customer: ${customer.getName()} [${customer.getId()}]`);
        if (includeTransactions) {
          const transactions = customer.getTransactions();
          if (transactions.length === 0) {
            console.log("  No transactions for this customer");
            return;
          }
          console.log("  Transactions");
          customer.getTransactions().forEach((transaction) => {
            const formatedDate = this.formatDate(transaction.date);
            console.log(
              `   Amount ${transaction.amount} Date: ${formatedDate}`
            );
          });
        }
      });
    }
  }

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  /**
   *
   * @param {string} searchquery
   * @param {string} field
   * @returns {void}
   */
  searchCustomers(searchquery: string, field: string) {
    this.branches.map((branch: IBranch) => {
      branch.getCustomers().map((customer: ICustomer) => {
        if (
          (field.trim().toLowerCase() == "name" &&
            customer
              .getName()
              .toLowerCase()
              .includes(searchquery.trim().toLowerCase())) ||
          (field.trim().toLowerCase() == "id" &&
            customer.getId() === Number(searchquery.trim()))
        ) {
          console.log(
            `Customer: ${customer.getName()} ID: [${customer.getId()}] Bank: ${
              this.name
            } Branch: ${branch.getName()}`
          );
        }
      });
    });
  }
}

export default Bank;
