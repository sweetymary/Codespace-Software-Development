//Coding Task 3 - Inheritance (Subclass and Superclass)
// Define a class named User 
class User {
    constructor() {
        //Initialise the userName
        this._userName = " ";
    }
    //Create a setter method that can set the value of the username.
    set userName(userName) {
        return this._userName = userName;
    }

    // Getter method for username
    get userName() {
        return this._userName;
    }

};

// Define a class named Admin that extends User
class Admin extends User {
    //express YourRole() method
    expressYourRole() {
        return "Admin";
    }
    //sayHello() method
    sayHello() {
        return `Hello Admin, ${this._userName}`;
    }
}
console.log("Admin");
// Create a new instance of the Admin class with the name "Balthazar"
const myadmin = new Admin();
myadmin.userName = "Balthazar";
// Call the sayHello method on the myadmin instance
console.log(myadmin.sayHello());


