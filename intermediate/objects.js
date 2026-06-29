//object declairation
// Object.create()//it creates singleton
// eg- const user = new Object() -->this create a singleton object {}

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
//console.log(jsUser);//change in original array

//Note freeze the object-
/*Object.freeze(jsUser) //you cant change the key value of obj
jsUser.email="fk@gmail.com" // xxxx not possible
console.log(jsUser);
*/

//adding fn to object

jsUser.gretings=function () {
   return console.log(`welcome to cand d mr ${this.name}`); //this refer to  current object
    
}

// console.log(jsUser.gretings());

//Merging objects --

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}


//1 method---> Object.assign({},obj1,obj2)

let obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Using Spread operator prefered

const result ={...obj1,...obj2}
// console.log(obj3);---->{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//vvimp***--------how to take keys and values  of object in arrays seprately

let keys = Object.keys(result);
let values=Object.values(result)
// console.log(keys);//-----[ '1', '2', '3', '4' ]
// console.log(values);//----[ 'a', 'b', 'c', 'd' ]

// how to take key value in seprate 
let entries = Object.entries(result)
// console.log(entries);//---[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// HOW TO Check a key is exist or not
 const check= result.hasOwnProperty('isLoggedIn');
//  console.log(check); // true if exist or false if not exist
 

//Destructring object--

const userInfo={
    name:"dk",
    instructor:"yes",
    age:34
}

const {name,instructor:mentor,age}=userInfo;//we can take alias using colons
console.log(name,mentor,age,);










