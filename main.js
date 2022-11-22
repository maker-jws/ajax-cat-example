console.log("custom JS loaded");
let cats = [];
const btn = document.querySelector("#fetchCat");
const target = document.querySelector(".target-container")

async function fetchCats() {
    // test cat 
    // const newCard = makeCard("Joshua","https://placekitten.com/g/200/200", ["a", "b","c"])
    // console.log(newCard)
    // target.appendChild(newCard)
    const URL = "https://cataas.com/cat?json=true"
    // URL is the destination of my api -> expect it to give me JSON data 
    const request = await fetch(URL) 
    // fetch returns a promise -> a special object -> tells js to hang tight until a special 'resolve' function is call
    // fetch API -> built into all modern browsers 
    // fetch API -> handle Asynchronous Javascript and XML requests (AJAX)
    // a server is contacted -> request is made
    console.log(request)
    // data is sent back as a response -> 
    const response = await request.json()
    // we can mess with it
    console.log(response)

    const img =`https://cataas.com`+ response.url
    console.log(img)
    const tags = response.tags
    const owner = response.owner || "None"

    const newCard = makeCard(owner,img, tags)
    target.appendChild(newCard)

}

function makeCard(owner, img, tags) {
    const card = document.createElement('div')
    card.classList.add('col-3', 'card' )
    card.style.width = "18rem"
    
    const cardImage = document.createElement('img')
    cardImage.classList.add("card-img-top")
    cardImage.setAttribute('alt', 'cat')
    cardImage.setAttribute('src', img)
    card.appendChild(cardImage)
    
    const body = document.createElement('div')
    body.classList.add('card-body')
    
    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = `Owner: ${owner}`
    body.appendChild(title)

    const text = document.createElement('p')
    text.textContent = `Associated Tags: ${tags.join(", ")}`
    text.classList.add("card-text")
    body.appendChild(text)

    const button = document.createElement('p')
    button.textContent = `Nice Cat`
    button.classList.add("btn", "btn-primary")
    body.appendChild(button)

    card.appendChild(body)
    return card
}

btn.addEventListener("click", fetchCats);


/*
 const URL = "https://cataas.com/cat?json=true"
    const request = await fetch(URL) 
    const response = await request.json()
    console.log(response)

    const img =`https://cataas.com`+ response.url
    console.log(img)
    const tags = response.tags
    const owner = response.owner || "None"

    const newCard = makeCard(owner,img, tags)
    target.appendChild(newCard)
*/