import { useLoaderData } from "react-router-dom";
import { getProduct } from "../fakeStoreApi";

export async function loader({params}){
    const product = await getProduct(params.id);
    return {product}; 
}

export default function Product() {
    const product = useLoaderData().product;
    return (
        <>
            <img src={`${product.image}`} alt={`${product.title}`} />
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Ratings: {product.rating.rate}</p>
            <p>{product.price}</p>
        </>
    )
}