//object declairation
// Object.create()//it creates singleton

//object literal -- it doesnt create singleton
const symbl=Symbol("key") //declair a symbol
const jsUser={
    name:"dk",
    [symbl]:"mysymbol",// symbol must be used in square  braces
    age:27,
    "location in":"pune",
    email:"dk@gmail.com",
    isLoggedIn:false,
    lastLoginDay:['mon','fri']
}
//read value from obj literal
console.log(jsUser['email']);
console.log(jsUser['location in']);
console.log( typeof jsUser[symbl]);

//change value
jsUser.age=299;
console.log(jsUser);//change in original array

//Note freeze the object-
/*Object.freeze(jsUser) //you cant change the key value of obj
jsUser.email="fk@gmail.com" // xxxx not possible
console.log(jsUser);
*/

//adding fn to object

jsUser.gretings=function () {
   return console.log(`welcome to cand d mr ${this.name}`);
    
}

console.log(jsUser.gretings());






