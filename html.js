function templatePokemonInfo(pokemonNumber,pokemonname,types,currentPokemonNumber,pokemonimg,pokemonHP,pokemonAttack,pokemonDefense,pokemonSpecialDef,pokemonSpeed,pokemonBaseXp,pokemonWeight,pokemonAttack) {
    return `<div  class="pokeinfo">
    <div  id="pokemon${pokemonNumber}" class="pokemoninfo">

    <div class="navigation">
    <button onclick="navigatePokemon(${currentPokemonNumber - 1})">Vorheriges Pokemon</button>
    <button onclick="navigatePokemon(${currentPokemonNumber + 1})">Nächstes Pokemon</button>
    <div class="imgcontainer"><img onclick="closeInfo()" id="imgleft"  class="button" src="img/close.png"></div>
</div>
        
       <div class="namecontainer"> <h1 class="pokename">${pokemonname}</h1> 
       <div class ="types"><h2>${types}</h2><span class="pokenumber">#${currentPokemonNumber}</span> </div><img class="infoimg" src="${pokemonimg}"></img></div>
        <div class="infosection"><span id="baseinfo" onclick="showAbout()" >About</span><span id="basestats" onclick="showStats(${pokemonHP},${pokemonAttack},${pokemonDefense},${pokemonSpecialDef},${pokemonSpeed})" >Stats</span></div>
        <div id="about" class="about">
            <div class="statinfo"><span id="basexp">Base experience: </span> <span >${pokemonBaseXp}</span></div>
                <div class="statinfo"><span id="weight">Weight: </span> <span>${pokemonWeight}</span></div>
        </div>
        <div id="stats"class="stats">
              <div class="statinfobar"><div> <span>hp:</span> <span>${pokemonHP}</span></div> <div class="statbar"><div id="statbarhp"></div></div></div>
              <div  class="statinfobar"><div><span>attack:</span> <span>${pokemonAttack}</span></div> <div class="statbar"><div id="statbarattack"></div></div></div>
              <div  class="statinfobar"><div> <span>defense:</span> <span>${pokemonDefense}</span></div> <div class="statbar"><div id="statbardefense"></div></div></div>
              <div  class="statinfobar"> <div><span>special def:</span> <span>${pokemonSpecialDef}</span></div> <div class="statbar"><div id="statbarspecialdf"></div></div></div>
              <div  class="statinfobar"> <div><span>speed:</span> <span>${pokemonSpeed}</span></div> <div class="statbar"><div id="statbarspeed"></div></div></div>
        </div>
    </div>
</div> `;
}


function templatePokemon(currentPokemonNumber,pokemonname, pokemonimg, types,pokemoninfo) {
    return `<div onclick='openInfo(${pokemoninfo},${currentPokemonNumber})'
     id=pokemon${currentPokemonNumber} class="pokemon"><h1>${pokemonname}</h1><div 
    class ="types"><h2>${types}</h2><span class="pokenumber">#${currentPokemonNumber}</span>
     </div><img src="${pokemonimg}"></img></div>`;
}
