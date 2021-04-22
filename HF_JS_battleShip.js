function init(){
    let view={
        displayMessage: function(msg){
            let messageArea = document.getElementById("messageArea");
            messageArea.innerHTML = msg;
        },
        displayHit: function(location){
            let cell = document.getElementById(location);
            cell.setAttribute("class", "hit");
        },
        displayMiss: function(location){
            let cell = document.getElementById(location);
            cell.setAttribute("class", "miss");
        }
    };

    view.displayMiss("A0");
    view.displayHit("D4");
    view.displayMiss("F5");
    view.displayHit("B2");
    view.displayMiss("C5");
    view.displayHit("C6");

    view.displayMessage("test message");
}

window.onload=init;