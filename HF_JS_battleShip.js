let aleaPosition= Math.floor(Math.random() * 7);

let a,b,c;

if(aleaPosition === 0){
    a=0; b=1; c=2;
}else if(aleaPosition === 6){
    a=4; b=5; c=6; 
}else {
    a=aleaPosition-1;
    b=aleaPosition;
    c=aleaPosition+1;
}

let guess=0;
let totGuess=0;
let hit=0;
let isSunk=false;

while(isSunk === false){
    guess= prompt(" chiffre entre 0 et 6: ");

    if(guess <0 || guess>6){
        alert("entrez un chiffre valide");
    }

    if(guess >=0 || guess<=6){
    totGuess +=1;
    }


}