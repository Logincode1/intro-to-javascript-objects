const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
// console.dir(pokemon, { maxArrayLength: null })

// Exercise 1
// console.log(pokemon[58].name);

// Exercise 2
// console.log(game);


// Exercise 3

game.difficulty = "Easy";


// Exercise 4

game.party.push(pokemon[38]);


// Exercise 5

game.party.push(pokemon[88], pokemon[112], pokemon[142]);




// Exercise 6

for (let i = 0, x = game.gyms.length; i < x; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}


// Exercise 7

for (let i = 0, x = game.party.length; i < x; i++) {
    if (game.party[i].starter) {
        game.party.splice(i, 1, pokemon[i + 1]);
    }
}


// Exercise 8


for (let i = 0, x = game.party.length; i < x; i++) {
    console.log(game.party[i].name);
}


// Exercise 9


for (let i = 0, len = pokemon.length; i < len; i++) {
    if (pokemon[i].starter) {
        console.log(pokemon[i]);
    }
}


// Exercise 10

game.catchPokemon = function(pokemonObj) {
    this.party.push(pokemonObj);
}

game.catchPokemon(pokemon[53]);

// Exercise 11


game.catchPokemon = function(pokemonObj) {
    for (let i = 0, x = game.items.length; i < x; i++) {
        if (this.items[i].name === 'pokeball') {
            this.items[i].quantity -= 1;
            this.party.push(pokemonObj);
            break;
        }
    }
}

game.catchPokemon(pokemon[9]);
console.log(game.items);


// Exercise 12

for (let i = 0, x = game.gyms.length; i < x; i++) {
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true;
    }
}


// Exercise 13


game.gymStatus = function() {
    const gymTally = {
        completed: 0,
        incomplete: 0,
    }

    for (const gym of game.gyms) {
        if (gym.completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    }

    console.log(gymTally);

    return;
}

game.gymStatus();


// Exercise 14

game.partyCount = function() {
    let partyCount = 0;
    for (let i = 0, x = game.party.length; i < x; i++) {
        partyCount++;
    }
    return partyCount;
}


// Exercise 15

for (let i = 0, x = game.gyms.length; i < x; i++) {
    if (game.gyms[i].difficulty < 8) {
        game.gyms[i].completed = true;
    }
}


// Exercise 16

console.log(game);

