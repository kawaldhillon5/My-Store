import { useLoaderData, Link} from "react-router-dom";
import { getCategoryProducts } from "../fakeStoreApi";
import "./shop.css";

export async function loader({params}){
    const products = await getCategoryProducts(params.category)
    return {products};
}

export default function Shop() {
    const {products} = useLoaderData();  
    return (
        <>
            {products.length ? (
                <ul className="product-list-div">
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link to={`${product.id}`}><ProductList product={product}  /></Link>
                        </li>
                        )
                    )}
                </ul>
            ) : (
                <i>No Products</i>
            )}
        </>
    )
}

const ProductList = function({product}){
    return(
        <div className="list-product">
            <div className="list-product-img-div"><img className="list-product-img" src={`${product.image}`} alt={`${product.title}`} /></div>
            <div className="list-product-info">
                <div className="list-product-title">{product.title}</div>
                <div className="list-product-price">{`$${product.price}`}</div>
            </div>
        </div>
    )
}
        