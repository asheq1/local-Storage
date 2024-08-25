let notifyCount = 0;

function addProduct(){
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';

    if(name && quantity > 0){
        displayShow(name, quantity);
        saveProductToLocale(name, quantity)
        incrementNotifyCount()
    } else{
        alert(`Please enter a valid product name and quantity.`)
    }
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
    localStorage.setItem('cart', cartStringified)

}

const incrementNotifyCount = () =>{
    notifyCount++
    document.getElementById('notification-count').textContent = notifyCount;

}

const productFromLocalStorage = () =>{
    const savedCart = getStoredShopping();

    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayShow(product, quantity)
    }
    updateNotiFyCount()
}

const updateNotiFyCount = () =>{
    const cart = getStoredShopping();
    notifyCount = Object.keys(cart).length
    document.getElementById('notification-count').textContent = notifyCount;
}

const clearAllItems =() =>{
    localStorage.removeItem('cart')
    document.getElementById('container').innerHTML = ''
    notifyCount = 0;
    document.getElementById('notification-count').textContent = notifyCount
}

productFromLocalStorage()

