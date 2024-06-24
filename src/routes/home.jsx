import Footer from "../homeUI-elements/footer"
import Header from "../homeUI-elements/header"
import Navbar from "../homeUI-elements/navbar"
import Content from "../homeUI-elements/content"
import "./home.css"

export default function Root() {
    return (
        <>
        <Header></Header>
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
        </>
    )
}