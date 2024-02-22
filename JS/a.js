apiAddress = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000'
offSet = 0
limit = 2000
let pokemonNome = ''
let apiAddressModified = ''


async function getPokemon() {
    apiAddressModified = `https://pokeapi.co/api/v2/pokemon/${pokemonNome}/?offset=${offSet}&limit=${limit}`
    const response = await fetch(apiAddressModified)
    const data = await response.json()
    const pokemonDiv = document.getElementById('pokemons')

    const p = document.createElement('p')
    p.classList.add('pokemon-item')
    p.innerText = data.name
    p.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`
    const nomeSpan = document.createElement('span')
    nomeSpan.classList.add('pokemon-name')
    nomeSpan.innerText = data.name

    pokemonDiv.appendChild(p)
    p.appendChild(nomeSpan)


    if (pokemonDiv.children.length > 5) {
        pokemonDiv.classList.add('pokemon-list');
    }
    if (pokemonDiv.children.length > 15) {
        pokemonDiv.removeChild(pokemonDiv.children[0])
    }
}
        
// Evento do Input Input e Button
const button = document.getElementById('getPokemons');
document.getElementById('textInput').addEventListener('input', function(e) {
    e.preventDefault();
    pokemonNome = e.currentTarget.value;
    pokemonNome = pokemonNome.toLowerCase();
    console.log(e.currentTarget.value);

    if (pokemonNome !== '') {
        button.classList.remove('blockButton');
        button.addEventListener('click', getPokemon);
    }else {
        button.classList.add('blockButton');
    }
});

// Evento do Formulario
document.getElementById('textInputForm').addEventListener('submit', function(e) {
    if (pokemonNome === '') {
        alert('Digite um nome de um pokemon');
        e.preventDefault();
    }else { 
        e.preventDefault();
        getPokemon();
    }
});





