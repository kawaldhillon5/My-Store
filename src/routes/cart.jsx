import { Link, Form, redirect, useFetcher, useSubmit, useActionData } from "react-router-dom";
import { useLoaderData  } from "react-router-dom";
import { cartTotal, getCart, setQuantity, removeProduct } from "../cart/cart-class";
import "./cart.css"

export async function action({request}){
    const formData = await request.formData();
    let intent = formData.get("intend");
    const id = Number(formData.get("id"));
    if(intent === "+"){
        const quantity = Number(formData.get("quantity"));
        await setQuantity(id, quantity);
    }
    if(intent === "-"){
        const quantity = Number(formData.get("quantity"));
        if(quantity < 1){
            await removeProduct(id);
        } else {
           await setQuantity(id, quantity);
        }
    }
    if(intent === "delete"){
        await removeProduct(id);
    }
    return null

}

export async function loader(){
    const userCart = await getCart();
    const cartAmount = await cartTotal();
    console.log("loader:")
    console.log(userCart);
    console.log(cartAmount);
    return {userCart, cartAmount};
}

export default function Cart(){

    const {userCart, cartAmount} = useLoaderData();
    console.log("cart rendered");

    return(
        <div className="Cart-content">
            {(userCart.length > 0) ? 
                <div className="cart-div">
                    <div className="name">My Cart</div>
                    <ul className="cart-list-div">
                        {userCart.map((item) =>(
                            <li className="cart-item" key={item.id} >
                                <CartList product={item} />
                            </li>
                        ))
                        }
                    </ul>
                    <div className="cart-total-div">
                        <div className="cart-total">{`Total: $${cartAmount}`}</div>
                        <button className="cart-checkout-button">Checkout</button>
                    </div>
                </div>
                :
                <p>Cart Empty</p>
            }
        </div>
    )
}

function Quantity ({item}){
    const fetcher = useFetcher();
    const q = fetcher.formData
        ? fetcher.formData.get("quantity") 
        : item.quantity;

    return(
        <fetcher.Form className="cart-quantity-form">
            
            <button type="submit"
                className="q-button"
                onClick={(e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append("id", `${item.id}`);
                    formData.append("quantity", `${Number(q)+1}`);
                    formData.append("intend", "+");
                    fetcher.submit(formData, {method: "post", action: "/cart"});
                }}
            >+</button>
            <span>{q}</span>
            <button type="submit"
                className="q-button"
                onClick={(e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append("id", `${item.id}`);
                    formData.append("quantity", `${Number(q)-1}`);
                    formData.append("intend", "-");
                    fetcher.submit(formData, {method: "post", action: "/cart"});
                }}
            >-</button>
            <button type="submit"
                className="delete-button"
                onClick={(e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append("id", `${item.id}`);
                    formData.append("intend", "delete");
                    fetcher.submit(formData, {method: "post", action: "/cart"});
                }}
            >Delete</button>
        </fetcher.Form>
    )

}

const CartList = function({product}){
    return(
        <div className="cart-product">
            <div className="cart-product-img-div"><img className="cart-product-img" src={`${product.image}`} alt={`${product.title}`} /></div>
            <div className="cart-product-info">
                <div className="cart-product-title">{product.title}</div>
                <div className="cart-product-price">{`$${Number(product.price)* Number(product.quantity)}`}</div>
                <Quantity item={product}></Quantity>
            </div>
            
        </div>
    )
}
     