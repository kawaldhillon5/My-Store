import Footer from "../homeUI-elements/footer"
import Header from "../homeUI-elements/header"
import Navbar from "../homeUI-elements/navbar"
import Content from "../homeUI-elements/content"
import "./home.css"
import { getCategories } from "../fakeStoreApi";
import { useLoaderData } from "react-router-dom"


export async function loader() {
    const categories = await getCategories();
    return {categories};
}

export default function Root() {

    const {categories} = useLoaderData();

    return (
        <>
        <Header></Header>
        <Navbar categories={categories}></Navbar>
        <Content></Content>
        <Footer></Footer>
        </>
    )
}