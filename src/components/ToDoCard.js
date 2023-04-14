import { NavLink } from "react-router-dom";
import '../styles/ToDoCard.css'

export function ToDoCard ({id, title, description, isCompleted, detail}) {
    return <li key={id}>
        <h3>{detail && "Title: "}{title}</h3>
        <p>{detail && <strong>Description: </strong>}{description}</p>
        <p>{detail ? <strong>Status:</strong> : "Status:"} {isCompleted ? "Done" : "Not Done"}</p>
        {!detail && <NavLink to={`/${isCompleted ? "done" : "open"}/${id}`}>Expand Todo</NavLink>}
        <hr />
    </li>
}