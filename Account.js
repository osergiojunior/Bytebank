export class Account{
    constructor(openingBalance, client, agency){
        this._balance = openingBalance;
        this._client = client;
        this._agency = agency;
    }

    set client(param){
        if(param instanceof Client){
            this._client = param;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    withdraw(value) {
        let tax = 1
        const withdrawnAmount = tax * value;
        if (this._balance >= withdrawnAmount) {
            this._balance -= withdrawnAmount;
            return withdrawnAmount;
        }
    }

    deposit(value) {
        if (value <= 0) {
            return;
        }
        this._balance += value;
    }

    transfer(value, account){
        const withdrawnAmount = this.withdraw(value);
        account.deposit(withdrawnAmount);
    }
}