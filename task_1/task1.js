const button = document.getElementById('add-item-btn')
const container = document.getElementById('container')
const box = []

const addElement = function () {
    const myDiv = document.createElement("div")
    myDiv.className = "alert"
    myDiv.innerHTML = "<div style='background-color: blue'><button type='button'>закрыть!</button></div>"
    box.push(myDiv)
    container.append(...box)
}

button.addEventListener('click', addElement);

