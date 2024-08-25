function addProduct(){
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';

    displayShow(name, quantity);
    saveProductToLocale(name, quantity)

}

const displayShow = (name, quantity) =>{
    const ul = document.getElementById('container')
    const li = document.createElement('li');
    li.innerText = `${name}: ${quantity}`
    ul.appendChild(li)

}

const getStoredShopping = () =>{
    const storedCart = localStorage.getItem('cart');
    let cart = {}
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart

}

const saveProductToLocale = (product, quantity) =>{
    const cart = getStoredShopping();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    console.log(cartStringified)
    

}

