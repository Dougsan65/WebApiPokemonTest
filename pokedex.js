async function getPokedex() {
    const apiAddressModifiedPokedex = 'https://pokeapi.co/api/v2/pokedex/1/';
    
    const response = await fetch(apiAddressModifiedPokedex);
    const data = await response.json();

    const pokemonDiv = document.getElementById('insertPokemonPokedex');

    data.pokemon_entries.forEach(async (entry) => {
        try {
            const responseImg = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry.pokemon_species.name}/`);
            const dataImg = await responseImg.json();

            const imgPoke = document.createElement('li');
            imgPoke.classList.add('pokemon-item');
            imgPoke.innerHTML = `<img src="${dataImg.sprites.front_default}" alt="${entry.pokemon_species.name}">`;

            const nomeSpan = document.createElement('span');
            nomeSpan.classList.add('pokemon-name');
            nomeSpan.innerText = entry.pokemon_species.name;

            imgPoke.appendChild(nomeSpan);
            pokemonDiv.appendChild(imgPoke);
        } catch (error) {
            console.log(error);
        }
    });
}

document.getElementById('getPokemonsPokedex').addEventListener('click', getPokedex);