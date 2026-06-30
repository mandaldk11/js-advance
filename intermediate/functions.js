//Declairation

function addTwoNo(num1,num2){
    console.log(num1+num2);
    
}
// addTwoNo --->Refrence
addTwoNo(7,2) //----->fn execution
// const result=addTwoNo(3,5);
// console.log(result);///-------vvimP******** result == undefined ,because result contain return value of a function .

function mutiply(num1,num2) {
    let mul = num1*num2;
    return mul
    // console.log(hi);------ after return statement nothing is ging to execute
    
}

let val = mutiply(4,5);
// console.log(val) // 20 because it returning value 

//Note when the argument is not pass but its used in function then it will return undefined
// eg-
/*
function welcome(user) {
    return `${user} just login
    `
}

 welcome() //here we are not pass args so our fn will print -----Undefined, just login
*/


//Default params---

function welcome(user="sam") { 
    return `${user} just login
    `
}

console.log(welcome());//sam just login
console.log(welcome("dk"));//dk just login


//Rest params ... dot is  used and it will take all the args and put it into an array

function addToCart(item1,item2,...remaining){
    return remaining//--------->  remaing=[64,5,3],  item1=1, item2=2
}

// addToCart(1,2,64,5,3)

//iife- to avoid global pollution which may cause bug to avoid this we can use
//named iife
(function connect(name) {
    console.log("DB connect..."+name);  
})("dk"); //-------->**** vimp-- we have to add semicolon ; to stop code execution otherwise it will give error


//anynomous iife
((name)=> {
    console.log("DB connect..."+name);  
})("dk"); //--
