//Coding Task 4- Polyorphism
//User Class
class User {
    //Constructor class
    constructor() {
        this.numberOfArticles = 0;
    }
    //get numbers of articles
    get numberOfArticles() {
        return  this._numberOfArticles;
    }

   //set the number of articles
    set numberOfArticles(numberOfArticles) {
        this._numberOfArticles = numberOfArticles;
    }
    
    calcScores() {
        //To be changed in a sub-class

        let scores = this.numberOfArticles * 10;
        console.log("Calculating scores for User class");
        return scores;
    }
}

// Define a class named Author that extends User
class Author extends User {
    //Override method
    calcScores() {

        let scores = super.calcScores() * 10 + 20;
        console.log("Scores for Author: " + scores);
        return scores;
}
}

// Define a class named Editor that extends User
class Editor extends User {
    calcScores() {

        let scores = super.calcScores() * 6 + 15;
        console.log("Scores for Editor: " + scores);
        return scores;

    }
}


// Create instances of Author and Editor
const author = new Author(8);
const editor = new Editor(15);

// Set number of articles for author and editor
author.numberOfArticles = 8;
editor.numberOfArticles = 15;

// Calculate scores for author and editor
author.calcScores();
editor.calcScores();



