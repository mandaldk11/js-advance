//Arrays
//1) Declairations-
const myArr=["dk",1,4,6,7,true];
const myArr2=new Array(1,2,3)

/*accesing element
myArr[index number]--- using 0 based indexing
*/

//Array method
myArr.push(6) // add element at last and return new pushed element
myArr.pop(); //remove last element and return true or false
myArr.unshift("20") // add element at first place and return new length of array
myArr.shift() // remove element at first place and return deleted item

//Array ques method RETURN TRUE OR FALSE
myArr.includes(2) //true or false
myArr.indexOf(100) //return index no in case of not finding item return -1
let newArr = myArr.join();
console.log(newArr); // convert into string value by comma seprated-dk,1,4,6,7,true
console.log(typeof newArr);//string

//slice or splice
myArr.slice(1,3)//return the copy of section array and DONT manipulate the original array
myArr.splice(1,3)// change the orinal array and return a section of original array also last index is including only in splice

//merging arrays
let marvel=['ironman','spiderman'];
let dc=['bataman','flash']

let allheros=marvel.concat(dc)//using concat()method it return a copy of all array
//OR
let allheros2=[...marvel,...dc,'dk'] //Prefered using spread operator
console.log(allheros2);

// flat nested array
const nestedArr=[1,2,3,['dk','pk','rk'],8,0,[567,456,['sl','dl']]];
let flatArr=nestedArr.flat(2)  //2 or Infinity is how many level you want-
/*[
  1,    2,    3,    'dk',
  'pk', 'rk', 8,    0,
  567,  456,  'sl', 'dl'
]*/
console.log(flatArr);

//convert into array
Array.isArray("dkk") ///false bz its string
Array.from("dkk")// covert it(string,obj,etc) into arr--->['d','k','k'] 
//vimp**
Array.from({name:"dkk"}) //--> it will return [] beause explictly we have to said  from which  key or value you want to make array

//how to make array from multiple variables-

let a=100
let b=200
let c=3

Array.of(a,b,c)-->[100,200,300]




