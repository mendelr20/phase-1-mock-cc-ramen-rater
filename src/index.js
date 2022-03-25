
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
            let img = document.querySelector('.detail-image')
            img.src = e.target.src
            img.id = e.target.id
            let title = document.querySelector('.name')
            title.textContent = dish.name
            let restaurant = document.querySelector('.restaurant')
            restaurant.textContent = dish.restaurant
            let rating  = document.querySelector('#rating-display')
            rating .textContent = dish.rating
            let comment = document.querySelector('#comment-display')
            comment.textContent = dish.comment

        })
    })
}













fetchRequest()