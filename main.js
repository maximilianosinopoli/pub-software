const addButtonNav = document.querySelector('#add-new-product')
const divProduct = document.querySelector('#test')
const pushNewElement = document.querySelector('#push')
let productName = document.querySelector('#product-name')
let productPrice = document.querySelector('#product-price')
let productQuantity = document.querySelector('#product-quantity')
let productType = document.querySelector('#product-type')
const container = document.querySelector('.container')
let hoverName = document.querySelector('#hover-name')
let hoverPrice = document.querySelector('#hover-price')
let hoverQuantity = document.querySelector('#hover-quantity')


let products = [
    {
    name: 'Carling',
    price: 5,
    quantity: 10,
    type: 'Draught Beer'
    },
        {
    name: 'Pravah',
    price: 5,
    quantity: 10,
    type: 'Draught Beer'
    },
        {
    name: 'Sierra Nevada',
    price: 7,
    quantity: 10,
    type: 'Draught Beer'
    },
        {
    name: 'Guiness',
    price: 5,
    quantity: 10,
    type: 'Draught Beer'
    },
        {
    name: 'Aspal',
    price: 5,
    quantity: 10,
    type: 'Draught Beer'
    },
]



products.forEach(hola)

function hola(e) {
    let newProduct = document.createElement('div');
    newProduct.addEventListener('click', (e) => console.log(e.target))
    newProduct.classList.add('new-product')
    let title = document.createElement('h2')
    title.innerText = e.name
    container.appendChild(newProduct)
    newProduct.appendChild(title)
}


addButtonNav.addEventListener('click', openAddProduct)
pushNewElement.addEventListener('click', pushNewProduct)

function openAddProduct() {
    divProduct.classList.add('div-add-product-show')
}

function pushNewProduct() {
    let newProduct = document.createElement('div');
    newProduct.classList.add('new-product')
    let title = document.createElement('h2')
    title.innerText = productName.value
    container.appendChild(newProduct)
    newProduct.appendChild(title)
    divProduct.classList.remove('div-add-product-show')
    products.push({
        name: productName.value,
        price: parseInt(productPrice.value),
        quantity: parseInt(productQuantity.value),
        type: productType.value
    })

    newProduct.addEventListener('mouseover', hover)
    newProduct.addEventListener('mouseout', noHover)
    newProduct.addEventListener('click', buscando)
    console.log(products)
    }

    function hover() {
        hoverName.innerText = `Product: ${productName.value}`
        hoverPrice.innerText = `Price: ${productPrice.value}`
        hoverQuantity.innerText = `Quantity: ${productQuantity.value}`
    }
    
    function noHover() {
        hoverName.innerText = 'Product:'
        hoverPrice.innerText = 'Price:'
        hoverQuantity.innerText = 'Quantity:'
    }
    
    

let suma = 0
let trolley = []

function buscando(e) {
    let a = e.target.innerText
    console.log(a)

    for (let i = 0; i < products.length; i++) {
        if (products[i].name === a) {
            suma = suma + products[i].price
            trolley.push(products[i].name)
        }
    }

    console.log(suma)
    console.log(trolley)
}

