import CartIcon from "./cart-icon"

export default function Header({cartLenght}) {
    return (
        <header className="header">
<<<<<<< HEAD
            <div className="header_name">My Store</div>
            <div className="header_search"> Search</div>
=======
            <div className="header-name">My Store</div>
            <div className="header-search"></div>
>>>>>>> new-branch
            <CartIcon quantity={cartLenght}></CartIcon>
        </header>
    )

}