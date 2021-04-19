//vérifier si un numéro de téléphone est de la forme 111-1111 ou 1111111
/*function validNumber(theNumb){
    for(let i=0;i<theNumb.length;i++){
        if(theNumb.charAt(3) == "-" && theNumb.length == 8){
            let tempStr = theNumb.slice(0,3) + theNumb.slice(4);
            if(!isNaN(tempStr)){
                return true;
            }
        }
        if(theNumb.length == 7 && !isNaN(theNumb)){
            return true;
        }
    }
    return false;
}
*/
/*
function validNumber(theNumb){
    for(let i=0;i<theNumb.length;i++){
        if(theNumb.charAt(3) == "-" && theNumb.length == 8){
            let tempStr = theNumb.split("-") ;
            if(!isNaN(tempStr[i])){
                return true;
            }
        }
        if(theNumb.length == 7 && !isNaN(theNumb)){
            return true;
        }
    }
    return false;
}



let theNumb = prompt("give a number on the form 123-4567: ");

console.log(validNumber(theNumb)); */

function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);

