import IBranch from "./IBranch";
import ICustomer from "./ICustomer";
interface IBank {
  addBranch(branch: IBranch): boolean;
  addCustomer(branch: IBranch, customer: ICustomer): boolean;
  addCustomerTransaction(
    branch: IBranch,
    customerId: number,
    amount: number
  ): boolean;
  findBranchByName(branchName: string): IBranch[] | null;
  listCustomers(branch: IBranch, showTransactions: boolean): void;
  searchCustomers(searchquery: string, field: string): void;
}

export default IBank;
