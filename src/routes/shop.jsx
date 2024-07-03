import { useLoaderData, Link} from "react-router-dom";
import { getCategoryProducts } from "../fakeStoreApi";

export async function loader({params}){
    const products = await getCategoryProducts(params.category)
    return {products};
}

export default function Shop() {
    const {products} = useLoaderData();  
    return (
        <>
            {products.length ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link to={`${product.id}`}>{product.title}</Link>
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
        