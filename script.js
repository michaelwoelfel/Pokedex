
let numberOfPokemon = 1;
let pokemonNumber = 1;


async function loadPokemon() {
    for (let i = numberOfPokemon; i < (numberOfPokemon + 20); i++) {
        let currentPokemon;
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        renderPokemonInfo(currentPokemon);
    }
}

async function loadPokemonNavigation(currentPokemonNumber) {
        let i = currentPokemonNumber
        let currentPokemon;
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
       
    }


function loadMorePokemon() {
    numberOfPokemon += 20;
    loadPokemon();
}



function renderPokemonInfo(currentPokemon) {
    currentPokemonNumber = pokemonNumber;
    pokemonname = currentPokemon['forms'][0]['name'];
    pokemonimg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    types = getPokemonTypes(currentPokemon);
    pokemoninfo = JSON.stringify(currentPokemon);
    document.getElementById('pokedex').innerHTML += templatePokemon(currentPokemonNumber,pokemonname, pokemonimg, types,pokemoninfo); 
    let colorpokemon = document.getElementById(`pokemon${currentPokemonNumber}`).innerHTML;
    getTypeandColor(colorpokemon);
    pokemonNumber++;
   
}

function getPokemonTypes(currentPokemon) {
    let types = ``;
    pokemontypes = currentPokemon['types'];
    for (let i = 0; i < pokemontypes.length; i++) {
        types += ` <span class="type">${pokemontypes[i]['type']['name']}</span>`;
    }
    return types;
}

function getPokemonstats(currentPokemon) {
    pokemonname = currentPokemon['forms'][0]['name'];
    pokemonimg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    pokemonBaseXp = currentPokemon['base_experience'];
    pokemonWeight = currentPokemon['weight'];
    pokemonHP = currentPokemon['stats'][0]['base_stat'];
    pokemonAttack = currentPokemon['stats'][1]['base_stat'];
    pokemonDefense = currentPokemon['stats'][2]['base_stat'];
    pokemonSpecialDef = currentPokemon['stats'][3]['base_stat'];
    pokemonSpeed = currentPokemon['stats'][0]['base_stat'];
    types = getPokemonTypes(currentPokemon);
}

function openInfo(currentPokemon, currentPokemonNumber) {
    showInfo();
    document.getElementById('moreinfo').innerHTML = ``;
    getPokemonstats(currentPokemon);
    document.getElementById('moreinfo').innerHTML = templatePokemonInfo(pokemonNumber,pokemonname,types,currentPokemonNumber,
    pokemonimg,pokemonHP,pokemonAttack,pokemonDefense, pokemonSpecialDef,
    pokemonSpeed,pokemonBaseXp,pokemonWeight,pokemonAttack);
  document.getElementById('baseinfo').classList.add('info');
    let colorpokemon = document.getElementById(`pokemon${currentPokemonNumber}`).innerHTML;
    getTypeandColor(colorpokemon);
    
   
}

function openInfoNav(currentPokemon,currentPokemonNumber) {
    showInfo();
    document.getElementById('moreinfo').innerHTML = ``;
    getPokemonstats(currentPokemon);
    document.getElementById('moreinfo').innerHTML = templatePokemonInfo(pokemonNumber,pokemonname,types,currentPokemonNumber,
    pokemonimg,pokemonHP,pokemonAttack,pokemonDefense, pokemonSpecialDef,
    pokemonSpeed,pokemonBaseXp,pokemonWeight,pokemonAttack);
  document.getElementById('baseinfo').classList.add('info');
    let colorpokemon = document.getElementById(`pokemon${currentPokemonNumber}`).innerHTML;
    getTypeandColor(colorpokemon);
    
   
}

function navigatePokemon(currentPokemonNumber) {
    closeInfo();
    loadPokemonNavigation(currentPokemonNumber);
   
}


async function loadPokemonNavigation(currentPokemonNumber) {
    let i = currentPokemonNumber
    let currentPokemon;
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    currentPokemon = await response.json();
    openInfoNav(currentPokemon,currentPokemonNumber);
}



function getTypeandColor(colorpokemon) {
    colorpokemon.includes('fire') ? getPokemonColorRed() : null;
    colorpokemon.includes('water') ? getPokemonColorBlue() : null;
    colorpokemon.includes('grass') ? getPokemonColorGrass() : null;
    colorpokemon.includes('ground') ? getPokemonColorRock() : null;
    colorpokemon.includes('electric') ? getPokemonColorElectric() : null;
    colorpokemon.includes('psychic') ? getPokemonColorPsychic() : null;
    (colorpokemon.includes('poison') || colorpokemon.includes('bug')) ? getPokemonColorPoison() : null;
    (colorpokemon.includes('flying') || colorpokemon.includes('normal')) ? getPokemonColorNormal() : null;
    (colorpokemon.includes('fighting') || colorpokemon.includes('fairy')) ? getPokemonColorFight() : null;
}


function getPokemonColorRed() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorred');
}


function getPokemonColorBlue() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorblue');
}


function getPokemonColorGrass() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorgreen');
}
function getPokemonColorElectric() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorelectric');
}


function getPokemonColorPoison() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorpoison');
}
function getPokemonColorNormal() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colornormal');
}


function getPokemonColorRock() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorrock');
};

function getPokemonColorPsychic() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorpsych');

};


function getPokemonColorFight() {
    let getColor = document.getElementById(`pokemon${pokemonNumber}`);
    getColor.classList.add('colorfight');

};


function colorStatBar(pokemonHP, pokemonAttack, pokemonDefense, pokemonSpecialDef, pokemonSpeed) {
    document.getElementById("statbarhp").style.width = `${pokemonHP}%`;
    document.getElementById("statbarattack").style.width = `${pokemonAttack}%`;
    document.getElementById("statbardefense").style.width = `${pokemonDefense}%`;
    document.getElementById("statbarspecialdf").style.width = `${pokemonSpecialDef}%`;
    document.getElementById("statbarspeed").style.width = `${pokemonSpeed}%`;
}


function showAbout() {
    document.getElementById('about').classList.remove('showstats');
    document.getElementById('stats').classList.add('showstats');
    document.getElementById('stats').classList.remove('hidestats');
    document.getElementById('basestats').classList.remove('info');
    document.getElementById('baseinfo').classList.add('info');
}


function showStats(pokemonHP, pokemonAttack, pokemonDefense, pokemonSpecialDef, pokemonSpeed) {
    document.getElementById('about').classList.remove('hidestats');
    document.getElementById('stats').classList.remove('showstats');
    document.getElementById('stats').classList.add('hidestats');
    document.getElementById('about').classList.add('showstats');
    colorStatBar(pokemonHP, pokemonAttack, pokemonDefense, pokemonSpecialDef, pokemonSpeed);
    document.getElementById('baseinfo').classList.remove('info');
    document.getElementById('basestats').classList.add('info');
}


function colorStatBar(pokemonHP, pokemonAttack, pokemonDefense, pokemonSpecialDef, pokemonSpeed) {
    document.getElementById("statbarhp").style.width = `${pokemonHP}%`;
    document.getElementById("statbarattack").style.width = `${pokemonAttack}%`;
    document.getElementById("statbardefense").style.width = `${pokemonDefense}%`;
    document.getElementById("statbarspecialdf").style.width = `${pokemonSpecialDef}%`;
    document.getElementById("statbarspeed").style.width = `${pokemonSpeed}%`;
}


function closeInfo() {
    document.getElementById('moreinfo').classList.remove('hidestats');
    document.getElementById('moreinfo').classList.add('showstats');
    document.getElementById('button').classList.remove('showstats');
    document.getElementById('overflow').classList.remove('hideoverflow');
    document.getElementById('baseinfo').classList.remove('info');
}


function showInfo() {
    document.getElementById('moreinfo').classList.remove('showstats');
    document.getElementById('moreinfo').classList.add('hidestats');
    document.getElementById('overflow').classList.add('hideoverflow');
    document.getElementById('button').classList.add('showstats');
}




