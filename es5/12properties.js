var account = {

    balance: 1200,
    widthdraw: function (amount) {
        this.balance -= amount;
        console.log("new balance:" + this.balance);
    }
};

Object.defineProperty(account, '_name',
    {
        value: 'default',
        enumerable: false,
        writable: true
    });

Object.defineProperty(account, 'name', {
        //cannot use own pro to read write will do infinit loop
        enumerable: true,
        set: function (name) {
            console.log("setting " + this.name + " to " + name);
            this._name = name;
        },
        get: function () {
            return this._name;
        }
    }
);

console.log(account);
account.widthdraw(100);
console.log(account);
console.log(account.name);
account.name = 'ddd';
console.log(account.name);
console.log('name' in account);


console.log('_name' in account);
console.log('balance' in account);

console.log(account.name);
delete account._name;
console.log(account.name);


for ( var field in account) {
    console.log(field); // no _name
    console.log(account[field]); // no _name

}

