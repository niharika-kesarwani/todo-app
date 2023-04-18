import { NavLink } from "react-router-dom";
import '../styles/ToDoCard.css'
import { useToDo } from "../context/todos-context";

export function ToDoCard ({id, title, description, isCompleted, detail, done, open}) {

    const { setToDoList } = useToDo();

    const liTagStyle = {textDecoration: !(detail || done || open) && isCompleted ? "line-through" : null};

    const btnHandler = () => {
        setToDoList(todoList => todoList.map(todo => todo.id === id ? ({...todo, isCompleted: !isCompleted}) : todo))
    }

    return <li key={id}>
        <h3 style={liTagStyle}>{detail && "Title: "}{title}</h3>
        <p style={liTagStyle}>{detail && <strong>Description: </strong>}{description}</p>
        <p style={liTagStyle}>{detail ? <strong>Status:</strong> : "Status:"} {isCompleted ? "Done" : "Not Done"}</p>
        {!detail && <p><NavLink  to={`/${isCompleted ? "done" : "open"}/${id}`}>Expand Todo</NavLink></p>}
        {!detail && <button onClick={btnHandler}>Mark As {isCompleted ? "Undone" : "Done"}</button>}
        {detail && <p><NavLink to="/">See All</NavLink></p>}
        <hr />
    </li>
}