const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });

    it('sets the initial age as 1', () => {
      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.age).toEqual(1);
    });
  });