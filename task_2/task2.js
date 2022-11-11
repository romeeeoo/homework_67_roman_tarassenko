const rowWithCards = document.getElementById('row-with-cards')

let xhr = new XMLHttpRequest();
xhr.onload = function(){
    // console.log(this.status);
    // console.log(this.response);
    const data = this.response
    console.log(data)
    const charObjects = JSON.parse(data)
    for (let i = 0; i < charObjects.length; i++) {
        const charCard = document.createElement("div")
        charCard.className = "card"
        charCard.innerHTML += `<div class='card-img-top' id='card-img-${i}'></div>`
        charCard.innerHTML += `<div class='card-body'>`
        const charCardImg = document.getElementById(`card-img-${i}`)
        charCardImg.innerHTML += `<img src="${charObjects['img']}" className="card-img-top" alt=
            "{{ product.name }}">`


        rowWithCards.append(charCard)
        console.log(charObjects[i])
    }
};

xhr.open('GET', "https://www.breakingbadapi.com/api/characters");
xhr.send()

