// function Scope solo se puede usar las variables declaradas dentro de la function 
function greeting(){
    let userName= 'carlos';
    console.log(userName);
    
    if (userName === 'carlos'){
        console.log(`hello ${userName}!!!`);
    }
}

greeting();

/// error por que es una function scope 
console.log(userName);