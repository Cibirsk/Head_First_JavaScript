let aleaPosition= Math.floor(Math.random() * 7);
console.log(aleaPosition);

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