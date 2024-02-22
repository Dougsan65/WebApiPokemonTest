let pokemonsAtuais = []
let ActualPage = 1

async function getPokedex() {
    const apiAddressModifiedPokedex = 'https://pokeapi.co/api/v2/pokedex/1/';
    
    const response = await fetch(apiAddressModifiedPokedex);
    const data = await response.json();
    pokemonsAtuais = data.pokemon_entries;
    console.log(pokemonsAtuais.length);
    showPokemons();
}

async function showPokemons() {
    const pokemonDiv = document.getElementById('insertPokemonPokedex');
    pokemonDiv.innerHTML = '';

    const limit = 20;
    const start = (ActualPage - 1) * limit;
    const end = Math.min(start + limit, pokemonsAtuais.length);
    
    for (let i = start; i < end; i++) {
        const pokemonNome = pokemonsAtuais[i].pokemon_species.name;


        const imgPoke = document.createElement('li');
        imgPoke.classList.add('pokemon-item');
        imgPoke.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" alt="${pokemonNome}">`;

        const nomeSpan = document.createElement('span');
        nomeSpan.classList.add('pokemon-name');
        nomeSpan.innerText = pokemonNome;
       
        imgPoke.appendChild(nomeSpan);
        pokemonDiv.appendChild(imgPoke);
    }
    const totalPages = Math.ceil(pokemonsAtuais.length / limit);
    document.getElementById('pageCounter').innerText = `Página ${ActualPage} de ${totalPages}`;
}
getPokedex();


document.getElementById('previousPage').addEventListener('click', function() {
    ActualPage--;
    if (ActualPage < 1) {
        ActualPage = Math.ceil(pokemonsAtuais.length / 20);
    }
    showPokemons();
});
document.getElementById('nextPage').addEventListener('click', function() {
    ActualPage++;
    if (ActualPage > Math.ceil(pokemonsAtuais.length / 20)) {
        ActualPage = 1;
    }
    showPokemons();
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft') {
        ActualPage--;
        if (ActualPage < 1) {
            ActualPage = Math.ceil(pokemonsAtuais.length / 20);
        }
        showPokemons();
    } else if (event.code === 'ArrowRight') {
        ActualPage++;
        if (ActualPage > Math.ceil(pokemonsAtuais.length / 20)) {
            ActualPage = 1;
        }
        showPokemons();
    }
});

document.getElementById('getPokemonsPokedex').addEventListener('click', getPokedex);