"use strict";
class Customer {
    constructor(customerName, balance, accountNumber) {
        this.customerName = "";
        this.balance = 0;
        this.accountNumber = "";
        this.txns = [];
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }
    pay(amount, payeeAccountNumber) {
        this.balance -= amount;
        customers[payeeAccountNumber].balance += amount;
        //We need to put money into payees account
    }
}
let customers = {}; //key value pair of string> customer
customers["1234"] = new Customer("Bilal", 1000, "1234");
customers["3455"] = new Customer("Toby", 1000, "3455");
customers["8888"] = new Customer("Zubair", 1000, "8888");
function pay() {
    alert("paying");
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amount = parseInt(document.getElementById("amount").value);
    let payer = customers[from];
    payer.pay(amount, to);
    let statementItem = document.createElement("div");
    document.body.appendChild(statementItem);
    statementItem.innerHTML = `${payer.customerName} ${payer.balance}`;
    let payee = customers[from];
    payee.pay(amount, to);
    let statementItem2 = document.createElement("div");
    document.body.appendChild(statementItem2);
    statementItem2.innerHTML = `${payee.customerName} ${payee.balance}`;
}
