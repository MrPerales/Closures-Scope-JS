const myGlobal=0;

function myFunction(){
    const myNumber=1;
    console.log(myGlobal);

    function parent(){  //function interna
        const inner=2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }
         
        return child();
    }
    return parent();
}

myFunction();
////example ////
export function sumWithClosure(firstNum) {
    //console.log(firstNum);
    // Tu código aquí 👈
    return function mySecondNum(secondNum) {
        let resultado = firstNum + (secondNum ?? 0) ;
        return resultado;   
      //console.log(secondNum);
  
    }
  }
  sumWithClosure(2)(3);

  /////el mismo codigo pero con asignacion de funcion a una variable 
  export function sumWithClosure(firstNum) {
    //console.log(firstNum);
    // Tu código aquí 👈
    let b = function mySecondNum(secondNum) {
        let resultado = firstNum + (secondNum ?? 0) ;
        return resultado;   
      //console.log(secondNum);
  
    }
    return b;
  
  }
  sumWithClosure(2)(3);