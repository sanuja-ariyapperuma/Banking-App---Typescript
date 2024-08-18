import Bank from "./bank";
import Branch from "./branch";
import Customer from "./customer";
import IBank from "./interfaces/IBank";
import IBranch from "./interfaces/IBranch";
import ICustomer from "./interfaces/ICustomer";

const arizonaBank: IBank = new Bank("Arizona");
const westBranch: IBranch = new Branch("West Branch");
const sunBranch: IBranch = new Branch("Sun Branch");
const customer1: ICustomer = new Customer("John2", 1);
const customer2: ICustomer = new Customer("Anna", 2);
const customer3: ICustomer = new Customer("John", 3);

console.log(" ");

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);

console.log(" ");

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

console.log(" ");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

console.log(" ");

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

console.log(" ");

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, true);

console.log(" ");

console.log("-----------------------Searching-----------------------");

arizonaBank.searchCustomers("John", "name");
console.log(" ");
arizonaBank.searchCustomers("1", "Id");

console.log(
  "-----------------------Tests Added By Sanuja-----------------------"
);
console.log(" ");

// More test scenarios added by Sanuja

// Test 1: Trying to add same customer again to the same branch
// Expected: Error should be consoled with the message "Customer is already added to the branch"
arizonaBank.addCustomer(westBranch, customer1);

// Test 2: Trying to add a customer to a branch with an existing customer Id
// Expected: Error should be consoled with the message "Customer with Id is already added to the branch"
const customer4 = new Customer("Kane", 1);
arizonaBank.addCustomer(westBranch, customer4);

// Test 3: Trying to add a branch with the same name of an existing branch
// Expected: Error should be consoled with the message "Sorry. Branch with name branch_name is already added to Bank bank_name"
const dupplicateWestBranch = new Branch("West Branch");
arizonaBank.addBranch(dupplicateWestBranch);

// Test 4: Trying to add null as a branch
// Expected: Error should be consoled with the message "Branch must be an instance of Branch"
//arizonaBank.addBranch(null);

// Test 5: Trying to list customers without transactions
// Expected: List of customers should be consoled without transactions
arizonaBank.listCustomers(sunBranch, false);
