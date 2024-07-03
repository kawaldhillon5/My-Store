import { Link, Form, redirect, useFetcher, useSubmit, useActionData } from "react-router-dom";
import { useLoaderData  } from "react-router-dom";
import { cartTotal, getCart, setQuantity, removeProduct } from "../cart/cart-class";
import localforage from "localforage";

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
                <div className="cart-with-items">
                    <ul>
                        {userCart.map((item) =>(
                            <li key={item.id} >
                                <div>
                                    {item.title}
                                </div>
                                <div>
                                    {item.price}
                                </div>
                                <Quantity item={item}></Quantity>

                            </li>
                        ))
                        }
                    </ul>
                    <div className="total">
                        {`Total is $${cartAmount}`}
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
        <fetcher.Form>
            
            <button type="submit"
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