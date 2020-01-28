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

function Friend(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
};

Friend.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}, I live in ${this.city} and I am ${this.age} years old`);
};

person1 = new Friend('Randall', 'Birmingham', '43');
person2 = new Friend('Liz', 'Hoover', '27');
person3 = new Friend('John', 'Mountainbrook', '47');
person4 = new Friend('Drew', 'Mobile', '41');
person5 = new Friend('Sammy', 'San Fransisco', '40');

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Profile {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    greeting() {
        console.log(`Hello my name is ${this.name}, I live in ${this.city} and I am ${this.age} years old`);
    }
};

person1 = new Profile('Randall', 'Birmingham', '43');
person2 = new Profile('Liz', 'Hoover', '27');
person3 = new Profile('John', 'Mountainbrook', '47');
person4 = new Profile('Drew', 'Mobile', '41');
person5 = new Profile('Sammy', 'San Fransisco', '40');

person1.greeting();
person2.greeting();
person3.greeting();
person4.greeting();
person5.greeting();

