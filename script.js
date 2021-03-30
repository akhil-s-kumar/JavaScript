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