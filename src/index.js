
function fetchRequest(){
 fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(menu => appendDom(menu))
}


function appendDom(menu){
    let div = document.querySelector('#ramen-menu')
    menu.forEach(dish => {
        let img = document.createElement('img')
        img.src = dish.image
        img.id = dish.id
        div.appendChild(img)
        document.querySelector('div').addEventListener('click', (e) => {
            console.log(e)
            let img = document.querySelector('.detail-image')
            img.src = e.target.src
            img.id = e.target.id
            let infoArray = menu.filter( obj => obj.id == img.id)
            let title = document.querySelector('.name')
            title.textContent = `${infoArray[0].name}`
            let restaurant = document.querySelector('.restaurant')
            restaurant.textContent = `${infoArray[0].restaurant}`
            let rating  = document.querySelector('#rating-display')
            rating .textContent = `${infoArray[0].rating}`
            let comment = document.querySelector('#comment-display')
            comment.textContent = `${infoArray[0].comment}`

        })
    })
}

function form(){
    let form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let name = e.target['name'].value
        let restaurant = e.target['restaurant'].value
        let image = e.target['image'].value
        let rating = e.target['rating'].value
        let comment = e.target['new-comment'].value
     fetch('http://localhost:3000/ramens', {
            method: "POST",
            headers: {"Accept": "application/json",
                    "Content-type": "application/json"},
            body: JSON.stringify({
                name: name,
                restaurant: restaurant,
                image: image,
                rating: rating,
                comment: comment
            }) 
        }) 
       .then(res => res.json())
       .then(() =>{
        let div = document.querySelector('#ramen-menu')
        div.innerHTML = ' '
        fetchRequest()
       })
    })
}


fetchRequest()
form()

