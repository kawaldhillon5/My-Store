import { Outlet, useNavigation } from "react-router-dom"

export default function Content() {
    const navigation = useNavigation();
    return (
        <div className= {`content `}>
            <div className={`loader-div ${navigation.state === "loading" ? "loader-div-loading" : ""}`}>
                <div className={`${navigation.state === "loading" ? "content-loading" : ""}`}></div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}