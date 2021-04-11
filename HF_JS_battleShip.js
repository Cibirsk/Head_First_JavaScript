let aleaPosition= Math.floor(Math.random() * 7);

let a,b,c;
let hitA=false;
let hitB=false;
let hitC=false;

if(aleaPosition == 0){
    a=0; b=1; c=2;
}else if(aleaPosition == 6){
    a=4; b=5; c=6; 
}else {
    a=aleaPosition-1;
    b=aleaPosition;
    c=aleaPosition+1;
}
let guess=0;
let totGuess=0;
let isSunk=false;


while(isSunk == false){
    guess= prompt(" chiffre entre 0 et 6: ");

    if(guess <0 || guess>6){
        alert("entrez un chiffre valide");
    }else{
        totGuess +=1;
    }

    if( (guess == a && hitA == true) || (guess == b && hitB == true) || (guess == c && hitC == true)){
        alert("cet endroit est déjà touché");
    }

    if(guess == a && hitA == false){
        alert("touché");
        hitA=true;
    }else if(guess == b && hitB == false){
        alert("touché");
        hitB=true;
    }else if(guess == c && hitC == false){
        alert("touché");
        hitC=true;
    }else{
        alert("raté");
    }

    if(hitA == true && hitB == true && hitC == true){
        isSunk=true;
    }
}

alert("touché coulé")
alert(`Votre taux de réussite est de : ${3/totGuess * 100} %`);