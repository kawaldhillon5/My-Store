import { useLoaderData, useOutletContext, Form, redirect } from "react-router-dom";
import { getProduct } from "../fakeStoreApi";
import { addProduct } from "../cart/cart-class";

export async function action({request, params}){
    const formData = await request.formData();
    const quantity = formData.get("quantity");
    await addProduct(params.id, quantity);
    return redirect(`/cart`);
}

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
            <Form method="post">
                <input type="number" name="quantity"/>
                <button type="submit">Add to Cart</button>
            </Form>
        </>
    )
}