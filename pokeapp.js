const pokemonSelect = document.getElementById('pokemonSelect');
const pokemonDetail = document.getElementById('pokemon-detail');

async function getPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
  const data = await response.json();
  const pokemonList = data.results;
  return pokemonList;
}

async function getPokemonDetail(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

function createPokemonOption(name) {
  const option = document.createElement('option');
  option.value = name;
  option.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  return option;
}

function showPokemonDetail(pokemon) {
  pokemonDetail.innerHTML = `
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <div>
    <p><b>Altura:</b> ${pokemon.height / 10} m</p>
    <p><b>Peso:</b> ${pokemon.weight / 10} kg</p>
    <p><b>Habilidades:</b> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
    </div>
    <p><b>Stats:</b></p>
    <ul>
      ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
    </ul>
  `;
}

async function loadPokemonList() {
  const pokemonList = await getPokemonList();
  pokemonList.forEach(pokemon => {
    const option = createPokemonOption(pokemon.name);
    pokemonSelect.appendChild(option);
  });
  pokemonSelect.addEventListener('change', async () => {
    const selectedPokemon = pokemonSelect.value;
    const pokemonDetail = await getPokemonDetail(selectedPokemon);
    showPokemonDetail(pokemonDetail);
  });
}

loadPokemonList();
