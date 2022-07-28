/*  objects  */


const pokemonList = [
    {   id: 1, 
        name: "Bulbasaur",
        HP: 45, 
        Attack: 49, 
        Defense: 49, 
        SpAttack: 65, 
        SpDefence: 65, 
        Speed: 45, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/001.png"
        },
    {   id: 2, 
        name: "Ivysaur", 
        HP: 60, 
        Attack: 62, 
        Defense: 63, 
        SpAttack: 80, 
        SpDefence: 80, 
        Speed: 60, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/002.png",
        },
    {   id: 3, 
        name: "Venusaur", 
        HP: 80, 
        Attack: 82, 
        Defense: 83, 
        SpAttack: 100, 
        SpDefence: 100, 
        Speed: 80, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/003.png",
        },
    {   id: 4, 
        name: "Charmander", 
        HP: 39, 
        Attack: 52,  
        Defense: 43, 
        SpAttack: 60, 
        SpDefence: 50, 
        Speed: 65, 
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/004.png",
        },
    {   id: 5,
        name: "Charmeleon",
        HP: 58,
        Attack: 64,
        Defense: 58,
        SpAttack: 80,
        SpDefence: 65,
        Speed: 80,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/005.png",
        },

    {   id: 6,
        name: "Charizard",
        HP: 78,
        Attack: 84,
        Defense: 78,
        SpAttack: 109,
        SpDefence: 85,
        Speed: 100,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/006.png",
        },
    {   id: 7,
        name: "Squirtle",
        HP: 44,
        Attack: 48,
        Defense: 65,
        SpAttack: 50,
        SpDefence: 64,
        Speed: 43,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/007.png",
        },
    {   id: 8,
        name: "Wartortle",
        HP: 59,
        Attack: 63,
        Defense: 80,
        SpAttack: 65,
        SpDefence: 80,
        Speed: 58,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/008.png",
        },
    {   id: 9,
        name: "Blastoise",
        HP: 79,
        Attack: 83,
        Defense: 100,
        SpAttack: 85,
        SpDefence: 105,
        Speed: 78,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/009.png",
        },
    {   id: 10,
        name: "Caterpie",
        HP: 45,
        Attack: 30,
        Defense: 35,
        SpAttack: 20,
        SpDefence: 20,
        Speed: 45,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/010.png",
        },
    {   id: 11,
        name: "Metapod",
        HP: 50,
        Attack: 20,
        Defense: 55,
        SpAttack: 25,
        SpDefence: 25,
        Speed: 30,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/011.png",
        },
    {   id: 12,
        name: "Butterfree",
        HP: 60,
        Attack: 45,
        Defense: 50,
        SpAttack: 90,
        SpDefence: 80,
        Speed: 70,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/012.png",
        },
    {   id: 13,
        name: "Weedle",
        HP: 40,
        Attack: 35,
        Defense: 30,
        SpAttack: 20,
        SpDefence: 20,
        Speed: 50,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/013.png",
        },
    {   id: 14,
        name: "Kakuna",
        HP: 45,
        Attack: 25,
        Defense: 50,
        SpAttack: 25,
        SpDefence: 25,
        Speed: 35,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/014.png",
        },
    {   id: 15,
        name: "Beedrill",
        HP: 65,
        Attack: 90,
        Defense: 40,
        SpAttack: 45,
        SpDefence: 80,
        Speed: 75,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/015.png",
        },
    {   id: 16,
        name: "Pidgey",
        HP: 40,
        Attack: 45,
        Defense: 40,
        SpAttack: 35,
        SpDefence: 35,
        Speed: 56,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/016.png",
        },
    {   id: 17,
        name: "Pidgeotto",
        HP: 63,
        Attack: 60,
        Defense: 55,
        SpAttack: 50,
        SpDefence: 50,
        Speed: 71,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/017.png",
        },
    {   id: 18,
        name: "Pidgeot",
        HP: 83,
        Attack: 80,
        Defense: 75,
        SpAttack: 70,
        SpDefence: 70,
        Speed: 101,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/018.png",
        },
    {   id: 19,
        name: "Rattata",
        HP: 30,
        Attack: 56,
        Defense: 35,
        SpAttack: 25,
        SpDefence: 35,
        Speed: 72,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/019.png",
        },
    {   id: 20,
        name: "Raticate",
        HP: 55,
        Attack: 81,
        Defense: 60,
        SpAttack: 50,
        SpDefence: 70,
        Speed: 97,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/020.png",
        },
    {   id: 21,
        name: "Spearow",
        HP: 40,
        Attack: 60,
        Defense: 30,
        SpAttack: 31,
        SpDefence: 31,
        Speed: 70,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/021.png",
        },
    {   id: 22,
        name: "Fearow",
        HP: 65,
        Attack: 90,
        Defense: 65,
        SpAttack: 61,
        SpDefence: 61,
        Speed: 100,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/022.png",
        },
    {   id: 23,
        name: "Ekans",
        HP: 35,
        Attack: 60,
        Defense: 44,
        SpAttack: 40,
        SpDefence: 54,
        Speed: 55,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/023.png",
        },
    {   id: 24,
        name: "Arbok",
        HP: 60,
        Attack: 95,
        Defense: 69,
        SpAttack: 65,
        SpDefence: 79,
        Speed: 80,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/024.png",
        },
    {   id: 25,
        name: "Pikachu",
        HP: 35,
        Attack: 55,
        Defense: 40,
        SpAttack: 50,
        SpDefence: 50,
        Speed: 90,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/025.png",
        },
    {   id: 26,
        name: "Raichu",
        HP: 60,
        Attack: 90,
        Defense: 55,
        SpAttack: 90,
        SpDefence: 80,
        Speed: 110,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/026.png",
        },
    {   id: 27,
        name: "Sandshrew",
        HP: 50,
        Attack: 75,
        Defense: 85,
        SpAttack: 20,
        SpDefence: 30,
        Speed: 40,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/027.png",
        },
    {   id: 28,
        name: "Sandslash",
        HP: 75,
        Attack: 100,
        Defense: 110,
        SpAttack: 45,
        SpDefence: 55,
        Speed: 65,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/028.png",
        },
    {   id: 29,
        name: "Nidoran",
        HP: 55,
        Attack: 47,
        Defense: 52,
        SpAttack: 40,
        SpDefence: 40,
        Speed: 41,
        img: "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/029.png",
        },
    {   id: 30,
        name: "Nidorina",
        HP: 70,
        Attack: 62,
        Defense: 67,
        SpAttack: 55,
        SpDefence: 55,
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

let p1StarterScore = 0;
let p2StarterScore = 0;

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
            p1StarterScore +=1;
        } else if(p1CardCount == p2CardCount) {
            p1Cards.push(randomisedCard[0]);
            p1CardCount +=1;
            p2StarterScore +=1;
        }
    }
    console.log(p1StarterScore)
    console.log(p2StarterScore)
}
shuffle()

let p1ScoreDisplay = document.getElementById("p1score");
let p2ScoreDisplay = document.getElementById("p2score");

function p1StartingScore(){
    console.log(p1ScoreDisplay)
    p1ScoreDisplay.innerHTML = p1StarterScore
}
p1StartingScore()

function p2StartingScore(){
    console.log(p2ScoreDisplay)
    p2ScoreDisplay.innerHTML = p2StarterScore
}
p2StartingScore()


p1Current = p1Cards.shift();
p2Current = p2Cards.shift();



// console.log(p1Current)
// console.log(p2Current)

//display the current card player data

function p1Stats(){
document.getElementById('p1hp').innerText = p1Current.HP
document.getElementById('p1Attack').innerText = p1Current.Attack
document.getElementById('p1Defence').innerText = p1Current.Defense
document.getElementById('p1SpAttack').innerText = p1Current.SpAttack
document.getElementById('p1SpDefence').innerText= p1Current.SpDefence
document.getElementById('p1Speed').innerText = p1Current.Speed
}
p1Stats()

function p2Stats(){
document.getElementById('p2hp').innerText = p2Current.HP
document.getElementById('p2Attack').innerText = p2Current.Attack
document.getElementById('p2Defence').innerText = p2Current.Defense
document.getElementById('p2SpAttack').innerText = p2Current.SpAttack
document.getElementById('p2SpDefence').innerText= p2Current.SpDefence
document.getElementById('p2Speed').innerText = p2Current.Speed
}
p2Stats()


//cycle through cards when attriubute is selected


//compare selected attribute value 


//assign player with the higher value the two card that were used 


//when one players card amount is 0 assign the winner


// hide computer data



