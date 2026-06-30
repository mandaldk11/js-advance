//if-else if-else
let age=19;
if (age>=18) {
    console.log("you can vote");    
}
else if(age<12){
     console.log("you can drink water");
} else {
     console.log("you can't vote");
}

//implicit 
if(age==19) console.log('you can drink wine'),console.log(" take beer"); // youcan omit curly braces by using comma sepration
;

// if you want to take multiple condition true you should use && eg-

let isLogin = true;
let debitCard = true;
let isAdmin=true
let loginFromGoogle=true
let loginFromEmail=true

//both condition must true the code will execute-
if (isLogin && debitCard && isAdmin ) {
    console.log("you can do shoping");
    
}

//either of them is true then code will execute-
if (loginFromEmail || loginFromGoogle) {
    console.log("user loged in");
    
}
//switch cases--- if we are not using break it will run all the cases either its condition is true or false 
// but---default case will not run.
let month=3;
switch (month) {
    case 1:
        console.log("january"); 
        break;
    case 2:
        console.log("feb"); 
        break;
    case 3:
        console.log("mar"); 
        break;
    case 4:
        console.log("april"); 
        break;

    default:
        console.log("default case run");
        
        break;
}

//Truthy and falsy values
// 1) Truthy -True, [], string with some values eg-"string",  1, 
// "0"-- zero inside string, 'false',"  "---space inside string, {},function(){}

//2)Falshy- false, empty string eg-"", false, 0, -0, bigInt(0n),null, undefined,NaN

//** Check for empty array and oject**/

let myArr =[];
if (myArr.length ===0) {
    console.log("array is empty");
    
}

//for object
let userInfo={
    name:"Dk",
    age:27
}

if (Object.keys(userInfo).length===0) {
    console.log("object is empty");
    
}

//note these three are true
false ==0;
false=='',
0==''

//Turnory operator- eg-
//syntax- (condition) ? true :false

//Nullish coalesching operator(??) //--- Nul or Undefined eg-
let teaPrice = 100;
teaPrice>=80 ? console.log('masala tea') : console.log("paicho tea");



let val1 ;
val1= null ?? 10 ;
console.log(val1);// 10

let val
val2 = undefined ?? 50 ?? 20 //------- jo pehle value milegi wo access ho jayegi
console.log(val2); // 50

