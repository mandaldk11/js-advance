//Note -- global scope is diffn in both Browser and node Environment


var c=700 //global scope

//block scope
if (true) {
    let a=100; //block-scope
    const b=200;//block-scope
    var c=300;  
}
//




// console.log(a); //undefined
// console.log(b);//undefined
// console.log(c);//300

//***Nested scope or closure --------> a child fn can use its parent fn variable but vice-versa is not true.
// it forms closure

function one() {
    const username="Dk"
    function two() {
        const website="stocknova.com"
        console.log(username);//---- Dk  Accessable
    }

    console.log(website);// not accessble also stop code execution of two()
    two()   
}
 
one();

