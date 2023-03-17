//============================
var memoryIphone12 = 128;
var redmi7a = 32;

if (memoryIphone12 > redmi7a){
    document.write("I know it is like that, because iphone is IPHONE!!!");
}
else if(memoryIphone12 == redmi7a){
    document.write("Impossible in this case!!!");
}
else{
    document.write("Something WRONG!!!");
}

// > greater than
// < less than
// == equal to 
// != not equal
// <=, >= , ....


//============================
// Nesting
let firsr_name = "Saidali";
let last_name = "Zikirillaev";

if (firsr_name == "Saidali"){
    if(last_name == "Zikirillayev"){
        document.write("Welcome Saidali Zikirillaev!")
    }
    else{
        document.write("Sorry, someting wrong!");
    }
}



//============================
// Complex conditions
let my_name = 'saidali';
let my_surname = 'zikirillaev';

// if ((one condition) && (next condition)){...}
// && means and in js
if ((my_name == 'saidali') && (my_surname == 'zikirillaev')){
    document.write('well done!!!');
}

// if ((one condition) || (next condition)){...}
// || means or in js
else if ((my_name == 'saidali') || (my_surname == 'zikirillaev')){
    document.write('cool :|');
}



//============================
//Switch Case
let car_name = 'tesla';

switch(car_name){
    case "BMW" :
        document.write("your favourite car is BMW, but not me...");
        break;
    case "tesla" :
        document.write("I also like Tesla");
        break;
    default:
        document.write("sorry, there is not it in the list!");
    }
