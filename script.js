//traditional function method
function myFunc(){
    let a = "Akhil";
    return a;
}

console.log(myFunc());

//passing parameters in traditional functions
function myFuncTwo(z){
    let a = 5;
    let b = 10 + z;
    let c = a + b;
    return c;
}

console.log(myFuncTwo(10));

//Arrow functionv 1st method
myFuncThree = (c) => {
    return c;
}

console.log(myFuncThree("Akhil S Kumar"));

//Arrow functionv 2nd method without brackets for parameters if only one thing to return.
myFuncFour = c => c;

console.log(myFuncFour("Nikhil S Kumar"));

//objects
let r = {
    firstName:"Akhil",
    lastName:"S Kumar"
};

console.log(r.firstName)

//arrays
let myArray = ["Akhil", "S", "Kumar"];
console.log(myArray[0])

//length 
let lenOfStr = "Akhil";
console.log(lenOfStr.length);

//index
let indexOfStr = 'Akhil S';
console.log(indexOfStr.indexOf('A')); //other methods like lastindexof, search, includes(True or False) can also be used.

//Slice method
let sliceStr = "Akhil";
console.log(sliceStr.slice(0,4));

//converting str to int
let strToInt = "15";
console.log(parseInt(strToInt));

//converting int to str
let intToStr = 15;
console.log(intToStr.toString());

//Array methods
let arrayMethods = ["A", "B", "C"];
console.log(arrayMethods);
//updating
arrayMethods[0] = "Z";
console.log(arrayMethods);
//adding element at last
arrayMethods.push("X");
console.log(arrayMethods);
//removing element from last
arrayMethods.pop();
console.log(arrayMethods);
//adding element at first
arrayMethods.unshift("D")
console.log(arrayMethods);
//removing element from first
arrayMethods.shift();
console.log(arrayMethods);
//adding element in position we like
arrayMethods.splice(1,0,"G","H");
console.log(arrayMethods);
//removing element we like
arrayMethods.splice(1,1);
console.log(arrayMethods);
//sorting in forward order
arrayMethods.sort();
console.log(arrayMethods);
//sorting in reverse order
arrayMethods.reverse();
console.log(arrayMethods);

//object methods
let objMethods = {
    firstName : "Akhil",
    lastName : "S Kumar"
};
console.log(objMethods);
//updating values
objMethods.firstName = "Nikhil";
console.log(objMethods);
//deleting values
delete objMethods.lastName;
console.log(objMethods);

//if else if and else
let myAge = 8;
if (myAge>18) {
    console.log("You are eligible to apply for license.")
}else if (myAge==18) {
    console.log("You are eligible.")
}else {
    console.log("You are not eligible!")
}

//switch
let fruit = "orange";
switch (fruit){
    case "Apple":
        console.log("I bought an Apple");
        break;

    case "Orange":
        console.log("I bought an Orange");
        break;

    default:
        console.log("Nothing bought!");
        break;
}