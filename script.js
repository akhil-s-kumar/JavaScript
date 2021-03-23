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