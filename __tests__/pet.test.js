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
      expect(pet.fitness).toEqual(7);
    });

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');
  
      pet.age = 30;
  
      expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});


describe('walk', () => {
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});


describe('feed', () => {
  it('decreases hunger from 6 to 3', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6;
    pet.feed();

    expect(pet.hunger).toEqual(3);
    });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it('returns hungry and walkies', () => {
    const pet = new Pet ('Fido');
    
    pet.hunger = 5;
    pet.fitness = 3;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  })

  it('returns walkies', () => {
    const pet = new Pet('Fido');

    pet.fitness = 2;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I need a walk");
  })

  it('returns hungry', () => {
    const pet = new Pet('Fido');

    pet.hunger = 8;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I am hungry");
  })

  it('returns great', () => {
    const pet = new Pet('Fido');

    pet.hunger = 0;
    pet.fitness = 5;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I feel great!");
  })

  it('returns dead :(', () => {
    const pet = new Pet('Fido');

    pet.age = 30;

    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(")
  })
});

describe('isAlive', () => {
    it('returns false i.e. dead pet', () => {
      const pet = new Pet('Fido');

      pet.age = 31;
      pet.hunger = 11;
      pet.fitness = 0;

      expect(pet.isAlive).toEqual(false);
    })

    it('returns true i.e. living pet', () => {
      const pet = new Pet('Fido');

      pet.age = 20;
      pet.hunger = 5;
      pet.fitness = 3;

      expect(pet.isAlive).toEqual(true);
    })
});

describe('adoptChild', () => {
  it('returns array with child Rex', () => {
    const parent = new Pet('Fido');
    const child = new Pet('Rex');
    parent.adoptChild(child);

    expect(parent.children[0].name).toEqual('Rex');
  })
})