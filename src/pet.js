const maxFitness = 10;
const fitnessIncrement = 4;

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
    }

module.exports = Pet;