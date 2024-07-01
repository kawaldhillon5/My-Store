import CartIcon from "./cart-icon"

export default function Header({cartLenght}) {
    return (
        <header className="header">
            <div className="header_name">My Store</div>
            <div className="header_search"> Search</div>
            <CartIcon quantity={cartLenght}></CartIcon>
        </header>
    )

}