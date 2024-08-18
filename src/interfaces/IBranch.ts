import ICustomer from "./ICustomer";

interface IBranch {
  getName(): string;
  getCustomers(): ICustomer[];
  addCustomer(customer: ICustomer): boolean;
  addCustomerTransaction(customerId: number, amount: number): boolean;
}

export default IBranch;
