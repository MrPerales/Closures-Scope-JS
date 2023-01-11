///variables

var a ; // declaramos 
var b = 'b'; //declaramos / asignamos 

b='bb'; // reasignacion 
var a = 'aa'//redeclaracion 


//Global Scope

var fruit ='Apple';    // global 

console.log(fruit);

function bestFruit(){
    console.log(fruit);
}
bestFruit();



function countries(){

   country='colombia'; //es global pero si la declaramos se hace local 
    console.log(country);
}
countries();
console.log(country);