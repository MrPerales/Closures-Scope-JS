function greeting(){
    let userName ='carlos';

    function displayUserName(){
        return `hello ${userName}`;
    }
    return displayUserName;
}
const g= greeting();
console.log(g); // solo retorna la fucnion no muestra nada 
console.log(g());// te regresa el valor que tiene dentrod e la fucnion 