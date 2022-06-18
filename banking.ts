class Customer{

    customerName=""
    balance=0
    accountNumber=""
    
    
    

    txns:string[]=[]

    constructor(customerName:string, balance:number,accountNumber:string,){

        this.customerName = customerName
        this.balance = balance
        this.accountNumber = accountNumber
        
        

    }

    pay(amount:number, payeeAccountNumber:string){

        this.balance -=amount
        
        customers[payeeAccountNumber].balance +=amount
        
        
        //We need to put money into payees account
    }

}


let customers:any={} //key value pair of string> customer

customers["1234"] = new Customer("Bilal", 1000,"1234")
customers["3455"] = new Customer("Toby", 1000,"3455")
customers["8888"] = new Customer("Zubair", 1000,"8888")


function pay() {

    alert("paying")

    let from = (<HTMLInputElement>document.getElementById("from")!).value
    let to = (<HTMLInputElement>document.getElementById("to")!).value
    let amount = parseInt((<HTMLInputElement>document.getElementById("amount")!).value)

    let payer:Customer = customers[from]
    payer.pay(amount,to)

    let statementItem=document.createElement("div")
    document.body.appendChild(statementItem)
    statementItem.innerHTML= `${payer.customerName} ${payer.balance}`

    /*let payee:Customer=customers[to]

    let statementItem2=document.createElement("div")
    document.body.appendChild(statementItem2)
    statementItem2.innerHTML= `${payee.customerName} ${payee.balance}`*/  /* This was added by Bilal. It doesn't work. what a surprise. */
}

