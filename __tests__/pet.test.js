const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });

    it('runs growUp function once', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(3);
    });

    describe('walk', () => {
      it('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });

    describe('feed', () => {
      it('decreases hunger from 6 to 3', () => {
        const pet = new Pet('Fido');
    
        pet.hunger = 6;
        pet.feed();
    
        expect(pet.hunger).toEqual(3);
      });
    });
  })});