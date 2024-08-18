import ITransaction from "./ITransaction";

interface ICustomer {
  getBalance(): number;
  addTransactions(amount: number): boolean;
  getName(): string;
  getId(): number;
  getTransactions(): ITransaction[];
}

export default ICustomer;
