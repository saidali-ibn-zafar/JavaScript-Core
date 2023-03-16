// =====================================
// Using parameters with functions
function food(x){
    alert('My favourite meal is ' + x);
}

food('Pilaw');
food('Pizza');




// =====================================
// function with multiple parameters
function apples(one, two){
    console.log(one + " is better than " + two);
}

apples("watermelon", "melon");
// if you want, we can also use multiple times with writing like above. -> apples("...", "...");



// =====================================
// the return statement
function easyPeasy(){
    return "GAME OVER";
}
console.log(easyPeasy());


function addNums(a,b){
    var c = a+b;
    return c;
}

document.write(addNums(1,2)); 



// Calling a function from another function
function doFirst(){
    document.write(" i am first");
}
function doSecond(){
    document.write(" SECOND!!!")
}
function start(){
    doFirst();
    doSecond();
}
start();


function first(){
    document.write("first ");
    second();
}
function second(){
    document.write("second");
    first();
}

// first(); DO NOT UNCOMMENT