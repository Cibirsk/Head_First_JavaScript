let scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

let result=[];
let hightest=0;
for(let i=0;i<scores.length;i++){
    if(scores[i]>=hightest){
        hightest=scores[i];
    }
}

for(let i=0;i<scores.length;i++){
    if(scores[i] == hightest){
        result.push(i);
    }
}

console.log(`numbers tests: ${scores.length}`);
console.log(`The hightest score is: ${hightest}`);
console.log(`solutions with the hightest: ${result}`);

/*
var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter","Bubblegum"];
var hasBubbleGum = [false,false,false,true];
var i = 0;

while (i < hasBubbleGum.length){
    if (hasBubbleGum[i]){
        console.log(products[i] + " contains bubble gum");
        i = i + 1;
    }
}


*/