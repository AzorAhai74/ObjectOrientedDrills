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



class Vehicle {
    constructor(type, manufact, numWheels) {
        this.type = type
        this.manufact = manufact;
        this.numWheels = numWheels;
    }
    aboutVehicle() {
        console.log(`The ${this.type}, made by ${this.manufact} that has ${this.numWheels} wheels`);
    }
};

class Truck extends Vehicle {
    constructor(type,manufact, numWheels, numDoors) {
        super(type,manufact, numWheels);
        this.numDoors = numDoors;
        this.truckBed = true;
    }
    aboutVehicle() {
        console.log(`The ${this.type} made by ${this.manufact} has ${this.numWheels} wheels, and ${this.numDoors} with a ${this.logTruckBed()}.`);
    }
};

class Sedan extends Vehicle {
    constructor(type, manufact,mpg, size) {
        super(type, manufact);
        this.numWheels = 4;
        this.numDoors = 4;
        this.truckBed = false;
        this.mpg = mpg;
        this.size = size;
    }
    aboutVehicle() {
        console.log(`The ${this.size} ${this.manufact} ${this.type} gets ${this.mpg} miles per gallon, has ${this.numWheels} wheels, ${this.numDoors} doors, and ${this.logtruckBed()}`)
    }
};

