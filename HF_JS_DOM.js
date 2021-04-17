function init(){
    let planet1 = document.getElementById("planet1");
    let planet2 = document.getElementById("planet2");
    let planet3 = document.getElementById("planet3");
    planet1.innerHTML = "Saturne";
    planet1.setAttribute("class", "redtext");
    planet2.innerHTML = "Terre";
    planet3.innerHTML = "Mars";
}
window.onload=init;

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"};
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
var test10 = null;
console.log(typeof test10);