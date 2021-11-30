const addButtonNav = document.querySelector('#add-new-product')
const divProduct = document.querySelector('#test')

addButtonNav.addEventListener('click', openAddProduct)

function openAddProduct() {
    console.log('working')
    divProduct.classList.add('div-add-product-show')
}
