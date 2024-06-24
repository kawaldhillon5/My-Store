import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <li className="home_link">
                    <Link to={`/`}>Home</Link>
                </li>
                <li className="home_link">
                    <Link to={`shop`}>Shop</Link>
                </li>
            </nav>
        </div>
    )
}