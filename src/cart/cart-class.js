import localforage from "localforage";
import { getProduct } from "../fakeStoreApi";

export async function getCart(){
    let cart = await localforage.getItem("cart");
    if(!cart) cart = [];
    return cart;
}

export async function addProduct(productid, q){
    let cart = await getCart();
    let product = await getProduct(productid);
    const existingProduct =  cart.find((product)=>{return productid == product.id});
    if(existingProduct){
        await setQuantity(productid, Number(existingProduct.quantity) + Number(q));
        return product
    } else {
        cart.unshift({...product, quantity: q });
        await setCart(cart);
        return product;
    }
}

export async function removeProduct(id){
    let cart = await getCart();
    cart.splice((cart.findIndex(i => i.id == id)),1);
    await setCart(cart);
}

export async function setQuantity(id, quantity){
    let cart = await getCart();
    const index = cart.findIndex(i => i.id == id)
    cart[index] = {...cart[index], quantity: quantity};
    await setCart(cart);
}



export async function cartTotal(){
    let cart = await getCart();
    let sum = 0;
    cart.forEach((product) =>{
        sum += product.price*product.quantity;
    });
    return sum;
}

export async function getNoOfProducts(){
    const cart = await getCart();
    if(cart){
        return cart.length;
    } else {
        return 0;
    }
}

function setCart(cart){
    return localforage.setItem("cart", cart);
}

