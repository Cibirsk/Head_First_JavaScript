let theNumb = prompt("give a number on the form 123-4567: ");
let validNum=false;
for(let i=0;i<theNumb.length;i++){
    if(theNumb.charAt(i) == "-" && i == 3 && theNumb.length == 8){
        let tempStr=theNumb.split("-");
        for(let j=0;j<tempStr.length;j++){
            if(isNaN(tempStr[j])){
                validNum= true;
            }
        }
    }
}


console.log(validNum);