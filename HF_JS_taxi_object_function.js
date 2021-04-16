var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    fuel: 0,
    addfuel: function(amount){
        this.fuel= this.fuel + amount;
    },
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started && this.fuel>0) {
            alert(this.make + " " +
            this.model + " goes zoom zoom!");
        } else {
        alert("You need to start the engine first.");
        }
        if(this.fuel == 0){
            alert(this.model + " haven't any fuel");
        }
    }
};

taxi.addfuel(10);
taxi.start();
taxi.drive();
taxi.stop();
