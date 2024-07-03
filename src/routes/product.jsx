import { useLoaderData, Form, redirect, useNavigation } from "react-router-dom";
import { getProduct } from "../fakeStoreApi";
import { addProduct } from "../cart/cart-class";
import "./product.css"

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
    const navigation1 = useNavigation();
    return (
        <div className="product-div">
            <div className="product-img">
                <img src={`${product.image}`} alt={`${product.title}`} />
            </div>
            <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-rating">Ratings: {product.rating.rate}</div>
                <div className="product-price">{`$${product.price}`}</div>
                <div className="product-desc">{product.description}</div>
                <div className="add-to-cart">
                    <Form method="post">
                        <input className="product-quantity-input" type="number" name="quantity" defaultValue={1}/>
                        <button className="product-add-button" type="submit">Add to Cart</button>
                    </Form>
                </div>
            </div>
        </div>
    )
}