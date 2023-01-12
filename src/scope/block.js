function fruits(){
    if(true){
                                ////// alcance/////////////// 
        var fruit1='apple';         //global scope
        let fruit2='kiwi';          //block scope
        const fruit3='banana';      //block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}
fruits();