        // document.getElementById('count-el').innerText = 5;
        let count = 5+7;
        console.log(count);

        let myAge, humandogRatio;
        myAge = 19;
        humandogRatio = 7;
        let myDogAge = myAge * humandogRatio;
        console.log(myDogAge)

        // create a var, bonusPoints. Initialize it as 50. Increase it to 100,
        // Deacrease it down to 25, and then finally increase it to 70;
        // console.log the value after each step;
        let bonusPoints = 50;
        bonusPoints += 50;
        console.log(bonusPoints);
        bonusPoints -= 75;
        console.log(bonusPoints);
        bonusPoints += 45;
        console.log(bonusPoints);



        // setting up the race
        function countdown(){
            console.log(5);
            console.log(4);
            console.log(3);
            console.log(2);
            console.log(1);
        }

        countdown();

        // go
        // players are running the race;
        // race is finished

        // get ready for a new race;


// ======================
        let lap1 = 34;
        let lap2 = 33;
        let lap3 = 36;

        function logLapTime(){
            // let totalTime = lap1 + lap2 + lap3;
            console.log(lap1 + lap2 + lap3);
        }
        logLapTime();


// ======================
        let lapsComplement = 0;
        //create a function that increments the lapsComplement variable with one;
        function incrementLaps(){
            lapsComplement++;
        }
        incrementLaps();
        incrementLaps();
        incrementLaps();

        // run it three times;

        console.log(lapsComplement);


// =======================
// string 
        let username = 'per';
        console.log(username);

        // create a var, message, that stores the string: "you have three new notifications;"
        let message = "You have 3 new notifications";
        console.log(message);

        console.log(message + " " +username); // this is a concatinating

        // or just write like below
        let messageToUser = message + " " + username + "!";
        console.log(messageToUser);

        // create a var, messageToUser, that contains the message we have logged;
        // let messageToUser = "We have logged";
        // console.log(messageToUser);


// =======================
// create a var, name and greeting. the name variable should store your name
// and then the greeting should store e.g: "Hi, my name is ";
// create a third var, myGreeting, that concatenates the two strings
// log myGreetings to the console

let name = "Saidali";
let greeting = "Hi, my name is ";
let myGreeting = greeting + name;
console.log(myGreeting);

let points = 4;
let bonusPoint = "120";

let totalPoints = points + bonusPoint;

console.log(totalPoints); // result is 4120, wow;
// because string always wins 

console.log(4+5); //9
console.log("2" + "4"); //"24"
console.log("5" + 1); // "51"
console.log(100 + "100"); //"100100"


// ATTENTION
// welcomeEl.innerHTML = welcomeEl.innerText  + "EMOJI";
// or welcomeEl.innerHTML += "EMOJI";