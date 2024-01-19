// var price = 10;

// To print it in console
console.log("Hello")

// var name = "Rakesh";
// var age = 19;
// var height = 121.09;
// var IsNoob = true;

// console.log(name)
// console.log(age)
// console.log(height)
// console.log(IsNoob)


var color = "Yellow";
var size = 40;
var price = 124.95;
var isBestseller = true;

console.log("Color: ", color)
console.log("size: ", size)
console.log("price: $"+price)
console.log("isBestseller", isBestseller)

var total = 39+18+10+51+27+69+31;
var avg = total/7;
console.log(avg + " Minutes per day")
console.log(avg >= 30)

var isWorking = false;
var carFixed = true;
if(isWorking){
    console.log("You can't Go")
}
else{
    console.log("You can Go")
    if(carFixed){
        console.log("Car is working")
    }
    if(!carFixed){
        console.log("Car is broken")
    }
}

var made = 50;
var spent = 70;
var remain = made - spent;

function AutoMata(){
 console.log("I made $"+made)
 console.log("I spent $"+spent)

 if(remain > 0){
    console.log("I Have $"+remain)
    console.log("I won day")
 }
 if(remain < 0){
    remain = remain * -1;
    console.log("I Have -$"+remain)
    console.log("I lost")
 }
}

AutoMata()
