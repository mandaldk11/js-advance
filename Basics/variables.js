//1)Declairation of variables

const accountId=1234;
// accountId=123; not allowed
let name="dk"
name="Dharmendra"
var age=26
age=27

email="dk@gmail.com"
email="dm@gmail.com"

//note- not use var as block and functional scope

// console.log(accountId);
// console.table([accountId,name,age,email])

// 2) Data Types-[string,num,boolean,BigInt,Symbol,undefined,null,object,]
// primitive-call by value, non primitive -- call bt refrence
// alert("hell0") --not possible bz we are using node js not browser
// console.log("hi") console.log('gg') ---need semicolon to write in new line
//***/ typeof(null)=object
// typeof(undefined)=undefined
// number - 2 power 53

// +++++++++++++stack vs heap memory++++++++++
// primitive datatype use stack memory and call by value
// eg- let name="dk"
// let newName=name; ---send copy not original
// newName="raja"
// console.log(name);---dk
// console.log(newName);--raja

// non primitive data type use heap memory also typeof primitive datatype is object or function object
// eg-
/*
const bio={
    name:"dk",
    age:25
}

let intro =bio;

intro.age=27;

console.log(bio)--->{ name: 'dk', age: 27 }  change in original copy
*/
