import Footer from "../homeUI-elements/footer"
import Header from "../homeUI-elements/header"
import Navbar from "../homeUI-elements/navbar"
import Content from "../homeUI-elements/content"
import "./home.css"
import { getCategories } from "../fakeStoreApi";
import { useLoaderData } from "react-router-dom"
import { getNoOfProducts } from "../cart/cart-class"

export async function loader() {
    const categories = await getCategories();
    const cartLenght = await getNoOfProducts();
    return {categories, cartLenght};
}

export default function Root() {

    const {categories, cartLenght} = useLoaderData();

    return (
        <>
        <Header cartLenght={cartLenght}></Header>
        <Navbar categories={categories}></Navbar>
        <Content ></Content>
        <Footer></Footer>
        </>
    )
}