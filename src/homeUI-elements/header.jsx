import Cart from "../routes/cart"

export default function Header() {
    return (
        <header className="header">
            <div className="header_name">My Store</div>
            <div className="header_search"> Search</div>
            <Cart></Cart>
        </header>
    )

}