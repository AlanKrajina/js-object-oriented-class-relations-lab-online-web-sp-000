let store = {drivers: [], passengers: []}
let driverId = 0
let passengerId = 0
let tripId = 0


class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }
}


class Passenger {
  constructor (name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
}

class Trip {
  constructor (driver,passenger){
    this.id = ++tripId

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
}
