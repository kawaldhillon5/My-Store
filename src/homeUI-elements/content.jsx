import { Outlet } from "react-router-dom"

export default function Content({contex}) {
    return (
        <div className="content">
            <Outlet context={contex} ></Outlet>
        </div>
    )
}