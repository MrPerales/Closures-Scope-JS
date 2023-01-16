///// sin clouse 
function moneyBox(coins){
    let saveCoins=0;
    saveCoins += coins;
    console.log('MoneyBox : $ ' + saveCoins);
}
moneyBox(5);
moneyBox(5);
moneyBox(5);


///con closure
function moneyBox(){
    let saveCoins=0;
    return function countCoins(coins){
        saveCoins+=coins;
        console.log('MoneyBox : $ ' + saveCoins);
    }
}
const myMoneyBox= moneyBox();

myMoneyBox(5);
myMoneyBox(55);
myMoneyBox(-15);
myMoneyBox(5);

//En este example tendrás que crear un closure que nos permita almacenar datos de mascotas 
//en cualquier momento.
//Si en algún momento llamamos a la función sin pasarle ningún parámetro esta 
//nos devolverá el array con los datos de todos las mascotas introducidas.

function createPetList(){
    let myPetList=[];
    return function addPet(pet){
        ////un plus que solo acepte strings 
        if (pet && /^[a-zA-Z]/.test(pet)){
            myPetList.push(pet);
            console.log(myPetList);
        }
        return myPetList;
    }
}
const petlist= createPetList();

petlist('dog');
petlist(2);
petlist('crocodile');
petlist(4);
petlist('turtle');

