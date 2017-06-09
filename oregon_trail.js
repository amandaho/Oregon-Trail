(function() {
  'use strict';

  function Traveler(name, food, isHealthy) {
    var name = name;
    var food = food;
    var isHealthy = isHealthy;

    this.getFood = function() {
      return food;
    }
    this.getName = function() {
      return name;
    }
    this.setFood = function(newFoodAmount) {
      food = newFoodAmount;
    }
    this.getIsHealthy = function() {
      return isHealthy;
    }
  } //closes traveler

  function Wagon(capacity) {
    var passengers = [];
    var initialCapacity = capacity;

    this.getCapacity = function() {
      return capacity;
    }

    this.getPassengers = function() {
      return passengers;
    }

    this.setPassengers = function(newTraveler) {
      passengers.push(newTraveler);
    }

  } //closes Wagon

  function join(wagon, traveler) {
    if (wagon.getCapacity() <= 5) {
    wagon.setPassengers(traveler);
  }
}

  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function makeTraveler(name){
    let food = getRandomIntInclusive(20, 100);
    return new Traveler(name, food, true);
  }

  function makeWagon(capacity) {
    return new Wagon(capacity);
  }

  function hunt(Traveler) {
    let successfulHunt = ((getRandomIntInclusive(0, 1)) * 100);
    //console.log(successfulHunt);
    var food = Traveler.getFood() + successfulHunt;
    Traveler.setFood(food);
  }

  function eat(Traveler) {
    let eat = -20
    //console.log(traveler2.getFood());
    Traveler.setFood(Traveler.getFood() + eat);
  }


  function quarantine(wagon){
    let getPassengers = wagon.getPassengers();
    //console.log('length = ' + getPassengers.length);

    for (var i = 0; i < getPassengers.length; i++) {
      if (getPassengers[i].getFood() < 20) {
       return true;
     }
    }
  return false;
  }

  function food(wagon) {
    let getPassengers = wagon.getPassengers();
    var total = 0;
    for(var i = 0; i < getPassengers.length; i++) {
      total += getPassengers[i].getFood();
    }
    return total;
  }


//   // Create a wagon called 'wagon'
let wagon = makeWagon(5);
// // Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
// // Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');
//
hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);
//
console.log("Is someone in the wagon sick?" + " " + quarantine(wagon)); // print true if someone is sick, false otherwise
console.log("Total Food in the wagon is" + " " + food(wagon)); // print juan's food + henrietta's food

console.log("Traveler " + traveler.getName() + " has this amount of food " + traveler.getFood());
console.log("Traveler " + traveler2.getName() + " has this amount of food " + traveler2.getFood());


})();
