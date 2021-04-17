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