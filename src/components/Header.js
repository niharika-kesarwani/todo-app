import { NavLink } from "react-router-dom";

export function Header () {
    return (
        <div>
            <h1>Todos</h1>
            <p><NavLink to="/done">Done Todo</NavLink></p>
            <p><NavLink to="/open">Open Todo</NavLink></p>
        </div>
    )
}