const pokemons = [
    {
    id: 1,
    name: 'Bulbasaur',
    cp: 439,
    type: "grass"
},
{
    id: 37,
    name: 'Vulpix',
    cp: 194,
    type: "fire"
},
{
    id: 134,
    name: 'Vaporeon',
    cp: 2469,
    type: "water"
},
{
    id: 130,
    name: 'Gyarados',
    cp: 2406,
    type: "water"
},
{
    id: 25,
    name: 'Pikachu',
    cp: 455,
    type: "electric"
},
{
    id: 27,
    name: 'Sandshrew',
    cp: 710,
    type: "ground"
},
{
    id: 52,
    name: 'Meowth',
    cp: 121,
    type: "normal",
},
];

//Skapa pokemonkort

let pokemon;
createCard(pokemons);


//Funktionen skapar ett pokemonkort
function createCard (list) {
    for (let i = 0; i < pokemons.length; i++) {
        pokemon = pokemons[i]

       let color = getColor(pokemon.type);
       console.log(color);

        let el = document.createElement("article");
        el.classList.add("card")
    
        el.innerHTML = `
        <div class="colorBox ${color}"></div>
        <section class="pokemonSpec">
            <h4>${pokemon.name}</h4>
            <p>${pokemon.cp} CP</p>
        </section>
        `;
        document.querySelector(".placeholder").appendChild(el);
    };
};

//Logik för färg på pokemonkort baserat på type
function getColor(type) {
    if (type == "grass") {
        return "green";
    } else if (type == "fire") {
        return "red";
    } else if (type == "water") {
        return "blue";
    } else if (type == "electric") {
        return "yellow";
    } else if (type == "ground") {
        return "brown";
    } else if (type == "normal") {
        return "purple";
    };
};

//lägger på evenetlistner på alla kort
document.querySelectorAll(".card").forEach((card) => {
    function selectCard() {
        moveCard(card)
    }
    card.addEventListener("click", selectCard);
});

function moveCard(card) {
    document.querySelector(".chosen").appendChild(card);
};





