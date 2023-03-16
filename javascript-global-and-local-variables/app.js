var car = "tesla";

function buy(){
    document.write(car);
}
// in this case car is global, why and why not it is easy to understand i hope :)

buy();
document.write(car);
// in the above code it work inside the function and outside,

// but if it is like below, it does not ...


function buy1(){
    var car1 = "bmw";
    document.write(car1);
}
// car1 in this case is a local variable

buy1();
document.write(car1);