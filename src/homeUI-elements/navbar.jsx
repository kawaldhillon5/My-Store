import { Link } from "react-router-dom";



export default function Navbar({categories}) {
    
    return (
        <div className="navbar">
            <nav>
                <li className="home_link">
                    <Link to={`/`}>Home</Link>
                </li>
                <li className="home_link">
                    <Link to={`shop`}>Shop</Link>
                    {   <ul>
                        {categories.map((categorie, i) => (
                            <li key={`${i}`}>
                                <Link to={`shop/${categorie}`}>{`${categorie}`}</Link>
                            </li>
                        ))}
                    </ul>
                }
                </li>
            </nav>
        </div>
    )
}