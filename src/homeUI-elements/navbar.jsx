import { Link, NavLink } from "react-router-dom";

export default function Navbar({categories}) {
    
    return (
        <div className="navbar">
                <li className="home-link" key="home">
                    <NavLink to={`/`}
                        className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } 
                    >Home</NavLink>
                </li>
                       
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
                    ))
                }         
        </div>
    )
}


