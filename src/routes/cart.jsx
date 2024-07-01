import { Link } from "react-router-dom";
import { useLoaderData  } from "react-router-dom";
import { getCart } from "../cart/cart-class";

export async function loader(){
    const userCart = await getCart();
    return {userCart};
}

export default function Cart(){

    const {userCart} = useLoaderData();

    return(
        <div className="Cart-content">
            {(userCart.length > 0) ? 
                <ul>
                    {userCart.map((item) =>(
                        <li key={item.id} >
                            <div>
                                {item.title}
                            </div>
                            <div>
                                {item.price}
                            </div>
                            <div>
                                {item.quantity}
                            </div>
                        </li>
                    ))
                    }
                </ul> 
                :
                <p>Cart Empty</p>
            }
        </div>
    )
}