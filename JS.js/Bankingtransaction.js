let accountBalance = 3000;
function deposit(depositAmount) {
    accountBalance += depositAmount;
    console.log(`Deposited $${depositAmount}. New balance: $${accountBalance}`);
}
function withdraw(withdrawalAmount) {
    if (withdrawalAmount <= accountBalance) {
        accountBalance -= withdrawalAmount;
        console.log(`Withdrawn $${withdrawalAmount}. New balance: $${accountBalance}`);
    } else {
        console.log("Insufficient funds. Withdrawal canceled.");
    }
}
function viewBalance() {
    console.log(`Current balance: $${accountBalance}`);
}
deposit(1500);
withdraw(600);
viewBalance();
deposit(800);
withdraw(5000);

