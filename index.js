let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0


class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

//A driver has many trips
trips() {
  return store.trips.filter(
      function(trip) {
          return trip.driverId === this.id;
      }.bind(this)
  );
}

// A driver has many passengers through trips
passengers() {
  return this.trips().map(trip => {
    return trip.passenger(); //trip belong to a passenger
  });
}
}


class Passenger {
  constructor (name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(
        function(trip) {
            return trip.passengerId === this.id;
        }.bind(this)
    );
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver(); //trip belong to a passenger
    });
  }
}





class Trip {
  constructor (driver,passenger){
    this.id = ++tripId
  //  this.driver = driver
  //  this.passenger = passenger

    store.trips.push(this)

    if(driver){
      this.setDriver(driver)
    }
    if(passenger){
      this.setPassenger(passenger)
    }

  }

  setDriver(driver){
    this.driverId = driver.id

  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }




driver() {
  return store.drivers.find(
      function(driver) {
          return driver.id === this.driverId;
      }.bind(this)
  );
}

passenger() {
    return store.passengers.find(
        function(passenger) {
            return passenger.id === this.passengerId;
        }.bind(this)
    );
}
}
