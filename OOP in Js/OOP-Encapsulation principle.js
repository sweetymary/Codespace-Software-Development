//OOP(Object Oriented Programming) in JavaScript(Classes and Objects)
//Coding Task 1 - Classes and Objects
//User class
class User {
    //Constructor class
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // hello() method
    hello() {
        console.log( `Hello, ${this.firstName} ${this.lastName}`);
    }
}
//Create an user1 instance(object)
const user1 = new User('John', 'Doe!');
//Get user first and last name and say hello
user1.hello();

//Create an user2 instance(object)
const user2 = new User('Jane', 'Doe!');
user2.hello();





//Coding Task 2 - Encapsulation

const user = {

    // Getter method to retrieve the user's name
    get Name() {
        return this._firstName, this._lastName;
    }
}
//accesing data property
user.getName = "Jane Doe";

// accessing getter methods
console.log(user.getName);


const newUser = {
    // Setter method to set a new value for the user

    set Name(newName) {
        this._firstName, this._lastName = newName;
    },

    set sayhello(Hello) {
        return 'Hello World!';
    }
};
newUser.setsayHello = "Hello World!";

//accesing setter method
newUser.setName = "Mary Joy";
console.log("Hello World!");
console.log("My name is :", newUser.setName);




