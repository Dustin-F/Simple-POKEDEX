document.querySelector("button").addEventListener("click", fetchPokemon);

function fetchPokemon() {
  let pokemon = document.querySelector("input").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}?offset=500&limit=500`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("h2").innerText = data.name;
      document.querySelector("img").src = data.sprites.front_shiny;
      document.querySelector("h3").innerText = data.types[0].type.name;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
