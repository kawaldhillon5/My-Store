import cartIconUrl from "../assets/cart-icon.svg" 
import { Link } from "react-router-dom"
export default function Cart(){
    return (
        <div className="header-cart">
            <div className="cart-quantity-text">1</div>
            <Link to="cart"  ><img className="cart-icon" src={cartIconUrl} alt="Cart" /></Link>
        </div>
    )
}