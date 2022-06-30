// URL

/* 
    Uniform Resource Locator (Identifier)

    Address that allows us to access web resources

    http://www.apple.com:443/path/to/file.html?key1=value&key2=value#anchorInDocument

    * http:// => scheme or protocol
    * www.apple.com => domain name (domain and/or subdomain ex: online.uprighted), and top level domain (.com; .eu; .co.uk)
    * :443 => port on which we access our resource
    * domain (IP once it goes thru DNS servers) + port == socket
    * ? => divider into the beginning of parameters
    * key=value => pairs of params and their values
    * & => divides multiple key/value pairs
    * # => anchor that allows us to go somewhere on the page
*/

// API

/* 
    Application Programming Interface

    A way for a client to communicate with the server.

    Allows for the HTTP request and response lifecycle.
*/

// FetchAPI

// Fetch with resolvers
/* 
    1. Fetch your resource which returns a promise
    2. use a .then resolver to catch fetch's return and assign to a parameter.
    3. Use .json() on response to finish reading entire ReadableStream
    4. chain another .then resolver to catch read response object and...
    5. go crazy with it!
*/

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// Fetch in Asynchornous Function

// async function getData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         let data = await response.json()
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

// getData()

// let myText = '{ "name": "Doug", "address": "123 Main St" }'

// console.log(JSON.parse(myText))

// Pokedex

// 1. Grab all of your elements that will need to be dynamic.

let cardImg = document.querySelector(".card-img")
let name = document.querySelector(".name")
let ability = document.querySelector(".ability")
let weight = document.querySelector(".weight")
let button = document.querySelector(".submit-btn")


button.addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.querySelector(".search-input").value

    // fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         name.textContent = data.name
    //         cardImg.firstElementChild.src = data.sprites.front_shiny
    //         ability.textContent = data.abilities[1].ability.name
    //         weight.textContent = data.weight
    //     })
    //     .catch(err => console.log(err))

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const data = await response.json()
        console.log(data)

        name.textContent = data.name
        cardImg.firstElementChild.src = data.sprites.front_shiny
        ability.textContent = data.abilities[1].ability.name
        weight.textContent = data.weight
    }

    getPokemon()

})

// Git Branching Notes

/* 
    Branches in git are like alternate timelines.

    They allow you to make changes to your code in a separate branch.

    Those changes do not affect the branch you branched off of.

    This is good for building new features without affecting existing, healthy code.
*/

// Commands to create a new branch

// git branch <branch_name> - creates a new branch from the branch you're currently in.

// git checkout <branch_name> - moves you to a branch

// git checkout -b <branch_name> - creates new branch (-b) and checks you out into it in one line.