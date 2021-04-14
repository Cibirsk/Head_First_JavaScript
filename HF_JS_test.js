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
}