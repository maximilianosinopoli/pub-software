let add = document.querySelector('#add')
let container = document.querySelector('.container')
let inputAdd = document.querySelector('#input-add')
let options = document.querySelector('#options')
let test = document.querySelector('#test')
let div = document.querySelector('#')

add.addEventListener('click', addElement)
test.addEventListener('click', showAdd)

function addElement() {
    let newElement = document.createElement('div');
    newElement.innerText = inputAdd.value;
    

    if (options.value === "Beer") {
        newElement.classList.add('cuadrado-beer');
    }

    if (options.value === "Snack") {
        newElement.classList.add('cuadrado-snack');
    }

    if (options.value === "Soft") {
        newElement.classList.add('cuadrado-soft');
    }

    if (options.value === "Spirits") {
        newElement.classList.add('cuadrado-spirit');
    }
    
    container.appendChild(newElement)
    console.log(options.value)
}

function showAdd() {
    
}