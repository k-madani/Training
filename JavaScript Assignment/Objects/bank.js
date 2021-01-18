function BankAccount(accountNumber, accountHolderName, accountBalance){
    this.accountNumber=accountNumber;
    this.accountHolderName=accountHolderName;
    this.accountBalance=accountBalance;

}
document.write("Luffy - <br> Balance - 45000 <br>");
var savings=new BankAccount(111,"Luffy", 45000);
savings.isSalary=20000;
document.write("Salary - 20000 <br><br>")
document.write("Nami - <br> Balance - 38000 <br> odLimit - 10000 <br><br>");
var current=new BankAccount(222,"Nami",38000);
current.odLimit=10000;

 savings.withdraw=function(amount){
    if(amount<this.accountBalance){
        var newAccountBalance=this.accountBalance-amount;
        this.accountBalance=newAccountBalance;
    }
    else{
        document.write("Insufficient balance in saving account <br>");
    }

 }
 savings.withdraw(5000);
 current.withdraw=function(amount){
    var newAccountBalance=this.accountBalance-amount;

     if(newAccountBalance>this.odLimit){
    this.accountBalance=newAccountBalance;
     }
    else{
        document.write("Account balance of current account should not go below negative odLimt <br>");
    }

}
current.withdraw(6000);
BankAccount.prototype.getCurrentBalance=function(){
    if(this.accountBalance>0){
    return this.accountBalance;
    }
}

document.write("Account Balance in saving account is "+savings.getCurrentBalance()+"<br>");
document.write("Account Balance in current account is "+current.getCurrentBalance()+"<br>");