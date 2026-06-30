//This keywords-

let userInfo={
    userName:"Dk",
    price:3332,
    welcome:function(){
        console.log( `${this.userName}, welcome to stocknova`);
        // console.log(this); //this refer to current context eg-userInfo 
        
    }
}

// userInfo.welcome()

// console.log(this); //--------> this refer to empty object{} because we are in node environment.
                      //but in brower its current context in  global object which is 
    
// This in normal fn we cant use-
/*
function chai() {
    let name ="tunna";
    console.log(this.name); //undefined 
    
}
chai()
*/
//this in function expression is also give---undefined
/*
const chai=function() {
    let name ="tunna";
    console.log(this.name); //undefined 
    
}
chai()
*/

//this  in arrow fn is also give---undefined
/*
const chai=()=> {
    let name ="tunna";
    console.log(this.name); //undefined 
    console.log(this); //{} because in node env it give {} but in browser it refer to global object(window)
    
}
chai()
*/

//Arrow Functions-  ()=>{}

const addTwo =(num1,num2)=>{
    return num1+num2;
}

//Or

// const addTwo =(num1,num2)=> num1 + num2 ---------> implicit return if you have one line implicit return if you have one line 
// const addTwo =(num1,num2)=>({name:"dk",age:27}) ---------> if you want to return obj you should wrap up it with parenthesis
// you can omit braces and return statement

console.log(addTwo(3,6));

