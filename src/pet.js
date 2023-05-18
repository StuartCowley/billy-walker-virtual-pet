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

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

    Pet.prototype.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
        }

    Pet.prototype.walk = function() {
        if ((this.fitness + fitnessIncrement) <= maxFitness ) {
            this.fitness += fitnessIncrement;
        } else {
            this.fitness = maxFitness;
        }
    Pet.prototype.feed = function() {
        if ((this.hunger - hungerIncrement) >= minHunger ) {
            this.hunger -= hungerIncrement;
        } else {
            this.hunger = minHunger;
        }
    Pet.prototype.checkUp = function() {
        if ((this.fitness <= fitnessThreshold) && (this.hunger >= hungerThreshold)) {
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