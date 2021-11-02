const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const AddItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    // display to ui

    displayProduct(name);

    // add to localstorage

    addProductToCart(name);

    nameField.value = '';
}



const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;

    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }


    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);

}
const PlaceOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart();