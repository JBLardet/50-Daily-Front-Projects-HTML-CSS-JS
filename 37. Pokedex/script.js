// Pour ce projet, on fait une requête par carte pour avoir toutes les informations
// Ce ne serait pas viable our un volume de données plus important !

const poke_container = document.getElementById('poke-container')
const pokemon_count = 151
const colors = {
    fire:'#FDDFDF',
    grass:'#DEFDE0',
    electric:'#FCF7DE',
    water:'#87CEEB',
    ground:'#F4E7DA',
    rock:'#D5D5D4',
    fairy:'#FCEAFF',
    poison:'#98D7A5',
    bug:'#F8D5A3',
    dragon:'#97B3E6',
    psychic:'#EAEDA1',
    flying:'#DEF3FD',
    fighting:'#E6E0D4',
    normal:'#F5F5F5',
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i=1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const displayedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types= pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    // Pour remplacer l'image par un sprite, on peut remplacer l'insertion dans pokemonInnerHTML de l'image par ceci: <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">

    const pokemonInnerHTML = `
    <div class="img-container">
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${pokemon.name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h2 class="name">${displayedName}</h2>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)
}

fetchPokemons()

    // 