///Var
var firstName; //undefined
firstName ='carlos';
console.log(firstName);


var lastNamme='Perales';   //declarar /asignar
lastNamme='carlos';     //reasignar 
console.log(lastNamme);     //carlos


var secondName='Perales';   //declaramos / asignamos 
var secondName='carlos';    //reasignamos
console.log(secondName);    //Carlos 

/// Let

let fruit ='apple'; //declara y asigna 
fruit ='kiwi'; //reasigna

///error no podemos volver a declarar y asignar una variable con let  
let fruit='banana';


//Const

const animal ='perro'; //declaramos y asigna 
animal='gato'; //reasigna 
console.log(animal);  /// error con metodo const no se puede re declarar ni reasignar 

const vehicle=[]; //iniciamos array
vehicle.push('bmw'); // agregamos
console.log(vehicle);  //bmw

vehicle.pop(); // eleiminamos el ultimo dato del array 
console.log(vehicle);
