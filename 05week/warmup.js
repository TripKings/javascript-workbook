class Account {

    // accountNumber = null; 
    // holder = null; 
    // balance = 0;
    // type = null;
    
    
    
    constructor(iaccountNumber, iholder, itype, itransactions){
        this.accountNumber = iaccountNumber;
        this.holder = iholder;
        this.type = itype;
        this.balance = 0;
        this.transactions = [];
    }

info(){
    let discription = 'Account Number =' + this.accountNumber;
    discription += "Balance =" + this.balance;
    discription += "Type =" + this.type;
    return discription;
}

updatedBalance(discription,amount) {
    let newTranctions = new Transactions(discription, amount);
    this.transactions.push(newTranctions);
    this.balance = this.balance + amount;
}

}

class Transactions{
    constructor(idiscription, iamount){
        this.discription = idiscription;
        this.amount = iamount;
    }
}

const myAccount = new Account('123456789', 'John Doe', 'savings')

const myOtherAccount = new Account('987654321', 'Jane Doe','checking')

console.log("myAccount info =" , myAccount.info());

myAccount.updatedBalance('deposit', 10);
myAccount.updatedBalance('deposit', 50);
myAccount.updatedBalance('Starbucks', -12)

for(let i =0; i < transactions.length; i++){
    console.log(`transaction # ${i}: ${myAccount.transactions[i], discription}`)
}

myAccount.transactions.forEach(function(transaction, index ){
    console.log(`${index}: ${transaction.discription} => ${transaction.amount}`)
})




//if i have all the transactions in my history do I need to keep a balance in my account class. 
