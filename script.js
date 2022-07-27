/*  objects  */


const pokemonList = [
    {   id: 1, 
        name: "Bulbasaur",
        HP: 45, 
        Attack: 49, 
        Defense: 49, 
        "Sp. Attack": 65, 
        "Sp. Defense": 65, 
        Speed: 45, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
        },
    {   id: 2, 
        name: "Ivysaur", 
        HP: 60, 
        Attack: 62, 
        Defense: 63, 
        "Sp. Attack": 80, 
        "Sp. Defense": 80, 
        Speed: 60, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
        },
    {   id: 3, 
        name: "Venusaur", 
        HP: 80, 
        Attack: 82, 
        Defense: 83, 
        "Sp. Attack": 100, 
        "Sp. Defense": 100, 
        Speed: 80, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
        },
    {   id: 4, 
        name: "Charmander", 
        HP: 39, 
        Attack: 52,  
        Defense: 43, 
        "Sp. Attack": 60, 
        "Sp. Defense": 50, 
        Speed: 65, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
        },
    {   id: 5,
        name: "Charmeleon",
        HP: 58,
        Attack: 64,
        Defense: 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        Speed: 80,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
        },

    {   id: 6,
        name: "Charizard",
        HP: 78,
        Attack: 84,
        Defense: 78,
        "Sp. Attack": 109,
        "Sp. Defense": 85,
        Speed: 100,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
        },
    {   id: 7,
        name: "Squirtle",
        HP: 44,
        Attack: 48,
        Defense: 65,
        "Sp. Attack": 50,
        "Sp. Defense": 64,
        Speed: 43,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
        },
    {   id: 8,
        name: "Wartortle",
        HP: 59,
        Attack: 63,
        Defense: 80,
        "Sp. Attack": 65,
        "Sp. Defense": 80,
        Speed: 58,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
        },
    {   id: 9,
        name: "Blastoise",
        HP: 79,
        Attack: 83,
        Defense: 100,
        "Sp. Attack": 85,
        "Sp. Defense": 105,
        Speed: 78,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
        },
    {   id: 10,
        name: "Caterpie",
        HP: 45,
        Attack: 30,
        Defense: 35,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        Speed: 45,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
        },
    {   id: 11,
        name: "Metapod",
        HP: 50,
        Attack: 20,
        Defense: 55,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        Speed: 30,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
        },
    {   id: 12,
        name: "Butterfree",
        HP: 60,
        Attack: 45,
        Defense: 50,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        Speed: 70,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
        },
    {   id: 13,
        name: "Weedle",
        HP: 40,
        Attack: 35,
        Defense: 30,
        "Sp. Attack": 20,
        "Sp. Defense": 20,
        Speed: 50,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
        },
    {   id: 14,
        name: "Kakuna",
        HP: 45,
        Attack: 25,
        Defense: 50,
        "Sp. Attack": 25,
        "Sp. Defense": 25,
        Speed: 35,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
        },
    {   id: 15,
        name: "Beedrill",
        HP: 65,
        Attack: 90,
        Defense: 40,
        "Sp. Attack": 45,
        "Sp. Defense": 80,
        Speed: 75,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
        },
    {   id: 16,
        name: "Pidgey",
        HP: 40,
        Attack: 45,
        Defense: 40,
        "Sp. Attack": 35,
        "Sp. Defense": 35,
        Speed: 56,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
        },
    {   id: 17,
        name: "Pidgeotto",
        HP: 63,
        Attack: 60,
        Defense: 55,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        Speed: 71,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
        },
    {   id: 18,
        name: "Pidgeot",
        HP: 83,
        Attack: 80,
        Defense: 75,
        "Sp. Attack": 70,
        "Sp. Defense": 70,
        Speed: 101,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
        },
    {   id: 19,
        name: "Rattata",
        HP: 30,
        Attack: 56,
        Defense: 35,
        "Sp. Attack": 25,
        "Sp. Defense": 35,
        Speed: 72,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
        },
    {   id: 20,
        name: "Raticate",
        HP: 55,
        Attack: 81,
        Defense: 60,
        "Sp. Attack": 50,
        "Sp. Defense": 70,
        Speed: 97,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
        },
    {   id: 21,
        name: "Spearow",
        HP: 40,
        Attack: 60,
        Defense: 30,
        "Sp. Attack": 31,
        "Sp. Defense": 31,
        Speed: 70,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
        },
    {   id: 22,
        name: "Fearow",
        HP: 65,
        Attack: 90,
        Defense: 65,
        "Sp. Attack": 61,
        "Sp. Defense": 61,
        Speed: 100,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
        },
    {   id: 23,
        name: "Ekans",
        HP: 35,
        Attack: 60,
        Defense: 44,
        "Sp. Attack": 40,
        "Sp. Defense": 54,
        Speed: 55,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
        },
    {   id: 24,
        name: "Arbok",
        HP: 60,
        Attack: 95,
        Defense: 69,
        "Sp. Attack": 65,
        "Sp. Defense": 79,
        Speed: 80,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
        },
    {   id: 25,
        name: "Pikachu",
        HP: 35,
        Attack: 55,
        Defense: 40,
        "Sp. Attack": 50,
        "Sp. Defense": 50,
        Speed: 90,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
        },
    {   id: 26,
        name: "Raichu",
        HP: 60,
        Attack: 90,
        Defense: 55,
        "Sp. Attack": 90,
        "Sp. Defense": 80,
        Speed: 110,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
        },
    {   id: 27,
        name: "Sandshrew",
        HP: 50,
        Attack: 75,
        Defense: 85,
        "Sp. Attack": 20,
        "Sp. Defense": 30,
        Speed: 40,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
        },
    {   id: 28,
        name: "Sandslash",
        HP: 75,
        Attack: 100,
        Defense: 110,
        "Sp. Attack": 45,
        "Sp. Defense": 55,
        Speed: 65,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
        },
    {   id: 29,
        name: "Nidoran",
        HP: 55,
        Attack: 47,
        Defense: 52,
        "Sp. Attack": 40,
        "Sp. Defense": 40,
        Speed: 41,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
        },
    {   id: 30,
        name: "Nidorina",
        HP: 70,
        Attack: 62,
        Defense: 67,
        "Sp. Attack": 55,
        "Sp. Defense": 55,
        Speed: 56,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/030.png",
      },
]

const hpBtn = document.getElementById("HP-btn");
const attackBtn = document.getElementById("Attack-btn");
const defenceBtn = document.getElementById("Defence-btn");
const specialAttackBtn = document.getElementById("Special-Attack-btn");
const specialDefencebtn = document.getElementById("Special-Defence-btn");
const speedBtn = document.getElementById("Speed-btn");


let p1ScoreDisplay = document.getElementById("p1score");
let computerScoreDisplay = document.getElementById("p2score");

let p1CardDisplay = document.getElementById("p1-card-pic");
let cpuCardDisplay = document.getElementById("p2-card-pic");

// Player cards
let p1Cards = [];
let p2Cards = [];

let selectedCards = []


// Player 1 & 2 score 
let p1Score = 0; 
let p2Score = 0; 

// Current cards in play
let p1Current;
let p2Current;

// assign 15 card per player  

function shuffle() {
    let deckLength  = pokemonList.length;
    let p1CardCount = 0;
    let p2CardCount = 0;

    while(--deckLength > -1) {
        let cardIdx = Math.floor(Math.random() * (deckLength +1));
        let randomisedCard = pokemonList.splice(cardIdx, 1);

        if(p1CardCount > p2CardCount) {
            p2Cards.push(randomisedCard[0]);
            p2CardCount +=1;
        } else if(p1CardCount == p2CardCount) {
            p1Cards.push(randomisedCard[0]);
            p1CardCount +=1;
        }
    }
}

shuffle()

p1Current = p1Cards.shift();
p2Current = p2Cards.shift();

console.log(p1Current)

//display the current card player data



// hide computer data


//cycle through cards when attriubute is selected


//compare selected attribute value 


//assign player with the higher value the two card that were used 


//when one players card amount is 0 assign the winner




