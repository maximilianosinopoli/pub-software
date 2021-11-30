const addButtonNav = document.querySelector('#add-new-product')
const divProduct = document.querySelector('#test')
const pushNewElement = document.querySelector('#push')
let productName = document.querySelector('#product-name')
let productPrice = document.querySelector('#product-price')
let productQuantity = document.querySelector('#product-quantity')
let productType = document.querySelector('#product-type')
const container = document.querySelector('.container')

let products = []

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
        price: productPrice.value,
        quantity: productQuantity.value,
        type: productType.value
    })
    console.log(products)
}
