import { useLoaderData } from "react-router-dom";
import { getProduct } from "../fakeStoreApi";

export async function loader({params}){
    const product = await getProduct(params.id);
    return {product}; 
}

export default function Product() {
    const product = useLoaderData().product;
    console.log(product);
    return (
        <p>Product</p>
    )
}