import cartIconUrl from "../assets/cart-icon.svg" 
import { Link } from "react-router-dom"
export default function CartIcon({quantity}){
    return (
        <div className="header-cart">
            <div className="cart-quantity-text">{quantity == undefined ? "0" : quantity }</div>
            <Link to="cart"  ><img className="cart-icon" src={cartIconUrl} alt="Cart" /></Link>
        </div>
    )
}