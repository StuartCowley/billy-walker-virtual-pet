// Sets a maximum number for fitness
const maxFitness = 10;
// Amount that fitness raises by when walk function is called
const fitnessIncrement = 4;

// Sets a minimum number for hunger
const minHunger = 0;
// Amount that hunger lowers by when growUp function is called
const hungerIncrement = 3;

// Thresholds to trigger feeding or fitness alerts
const hungerThreshold = 5;
const fitnessThreshold = 3;

// Death thresholds for isAlive function
const maxAge = 30;
const maxHunger = 10;

// Pet prototype
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}

// Checks if pet is alive
Pet.prototype = {
    get isAlive() {
      return this.age < maxAge && this.hunger < maxHunger && this.fitness > 0;
    }
  };

Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
    return this.children;
}


Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(')
    } else {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    }
    }


Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error ('Your pet is no longer alive :(');
    } else if ((this.fitness + fitnessIncrement) <= maxFitness ) {
        this.fitness += fitnessIncrement;
    } else {
        this.fitness = maxFitness;
    }


Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else if ((this.hunger - hungerIncrement) >= minHunger ) {
        this.hunger -= hungerIncrement;
    } else {
        this.hunger = minHunger;
    }


Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        return "Your pet is no longer alive :(";
    } else if ((this.fitness <= fitnessThreshold) && (this.hunger >= hungerThreshold)) {
        return "I am hungry AND I need a walk";
    } else if (this.fitness <= fitnessThreshold) {
        return "I need a walk";
    } else if (this.hunger >= hungerThreshold) {
        return "I am hungry";
    } else {
        return "I feel great!";
    }
}
}
}

module.exports = Pet;