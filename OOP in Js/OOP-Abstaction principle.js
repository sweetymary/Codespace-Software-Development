//5.Code task- Abstraction
// Define an abstract class named User
class User {
    constructor(username) {
        //Prevent to create object from this class
        if (this.constructor === User) {
            throw new TypeError("Cannot create new instances from class directly");
        }
        this._username = username;
    }

    // Getter method for username
    get username() {
        return this._username;
    }

    // Setter method for username
    set username(username) {
        this._username = username;
    }

    //Abstact method
    stateYourRole() {
        //Prevent to implerment new method
        throw new TypeError("Need to implement new method");
    }
}

// Define a class named Admin that inherits from User
class Admin extends User {
    //Override method
    constructor(username) {
        super(username);
    }


    stateYourRole() {
        return "admin";
    }
}

// Define a class named Viewer that inherits from User
class Viewer extends User {
    constructor(username) {
        super(username);
    }


    stateYourRole() {
        return "viewer";
    }
}

// Create an object from the Admin class
const admin = new Admin("Balthazar");
// Set username to "Balthazar"
admin.username = "Balthazar";
console.log(admin.stateYourRole());

// Create an object from the Viewer class
const viewer = new Viewer("Melchior");
// Set username to "Melchior"
viewer.username = "Melchior";
console.log(viewer.stateYourRole()); 
