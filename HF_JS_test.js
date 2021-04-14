function makeCar(){
    let marque=["Fiat","VW","Mercedes","Audi"];
    let passager=[2,4,6];
    let couleur=["rouge","jaune","bleue","noire"];
    let annee=[1969,1970,1981,2021];
    let convertible=[true,false];

    let randMarque= Math.floor(Math.random() * marque.length);
    let randPassager= Math.floor(Math.random() * passager.length);
    let randCouleur= Math.floor(Math.random() * couleur.length);
    let randAnnee= Math.floor(Math.random() * annee.length);
    let randConvertible= Math.floor(Math.random() * convertible.length);

    let car={
        marque: marque[randMarque],
        passager: passager[randPassager],
        couleur: couleur[randCouleur],
        annee: annee[randAnnee],
        convertible: convertible[randConvertible]
    }
    return car;
}

function afficheCar(car){
    console.log("your new car is a " + car.marque + " , " + car.passager + " places " + 
    " , " + car.couleur + " , " + car.annee + " , convertible: " + car.convertible);
}

let yourNewCar= makeCar();

afficheCar(yourNewCar);