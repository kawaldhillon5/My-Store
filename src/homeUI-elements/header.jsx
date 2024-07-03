import CartIcon from "./cart-icon"

export default function Header({cartLenght}) {
    return (
        <header className="header">
            <div className="header-name">My Store</div>
            <div className="header-search"></div>
            <CartIcon quantity={cartLenght}></CartIcon>
        </header>
    )

}