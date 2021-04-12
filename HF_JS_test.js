function phrase(){
    let word1=["Un", "Deux","Trois","Quatre","Cinq"];
    let word2=["petit","grand","gros","gentil","méchant"];
    let word3=["chat","chien","loup","lapin","cerf"];

    let ranWord1= word1[Math.floor(Math.random() * word1.length)];
    let ranWord2= word2[Math.floor(Math.random() * word2.length)];
    let ranWord3= word3[Math.floor(Math.random() * word3.length)];

    return ranWord1 + " " + ranWord2 + " " + ranWord3;
}

console.log(phrase());