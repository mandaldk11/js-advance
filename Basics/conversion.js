// conversion[Number(),Boolean(),String(),]


let score ="33";
// console.log(typeof score);--- string

// but we want to use it in no-
let value = Number(score);
//  console.log(typeof value); --- number
 
// Note -- if we take
let score ="33aaccvv";
let value =Number(score); //it will convert into NaN also same in undefined case it will give NaN 
// console.log(value); --- 33aaccvv
//***/ typeof(value)----Nan

let score=null;
let value=Number(score)
// typeof(value)==0 zero

//boolean conversion - 0(no) or 1(yes)

// notes --Boolean()
// 1== true,0==false
// ""== false
// "dk"==true
