const maxFitness = 10;
const fitnessIncrement = 4;

const minHunger = 0;
const hungerIncrement = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 6;
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
    }
    }

module.exports = Pet;