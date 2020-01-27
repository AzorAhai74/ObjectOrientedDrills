let person1 = {
    name: 'Randall',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

let person2 = {
    name: 'Liz',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

let person3 = {
    name: 'John',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

let person4 = {
    name: 'Drew',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

let person5 = {
    name: 'Sammy',
    sayHello: function() {
        console.log(`Hello my name is ${this.name}`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();