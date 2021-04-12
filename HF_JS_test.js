function printHighScore(arrScores,arrCost){
    let result=[];
    let hightest=0;
    let bestValue=0;
    let bestValueIndex=[];
    for(let i=0;i<arrScores.length;i++){
        if(arrScores[i]>=hightest){
            hightest=arrScores[i];
        }
    }

    for(let i=0;i<arrScores.length;i++){
        if(arrScores[i] == hightest){
            result.push(i);
            bestValueIndex.push()
        }
}


    return `The numbers tests are:  ${arrScores.length} ,
    the hightest score is:  ${hightest}
    and the solutions:  ${result}`;
}

let scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

let costs = [.25, .27, .25, .25, .25, .25,
.33, .31, .25, .29, .27, .22,
.31, .25, .25, .33, .21, .25,
.25, .25, .28, .25, .24, .22,
.20, .25, .30, .25, .24, .25,
.25, .25, .27, .25, .26, .29];

console.log(printHighScore(scores,costs));