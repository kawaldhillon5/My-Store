import { Link, NavLink } from "react-router-dom";

export default function Navbar({categories}) {
    
    return (
        <div className="navbar">
            <nav>
                <li className="home_link">
                    <Link to={`/`}>Home</Link>
                </li>
                <li className="home_link">
                    <span>Shop</span>
                    {   <ul>
                        {categories.map((category, i) => (
                            <li key={`${i}`}>
                                <NavLink to={`shop/${category}`}
                                        className={({ isActive, isPending }) =>
                                        isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                    }
                                >{`${category}`}</NavLink>
                            </li>
                        ))}
                        </ul>
                    }
                </li>
            </nav>
        </div>
    )
}


