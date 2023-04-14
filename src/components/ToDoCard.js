import { NavLink } from "react-router-dom";
import '../styles/ToDoCard.css'
import { useToDo } from "../context/todos-context";

export function ToDoCard ({id, title, description, isCompleted, detail}) {

    const { setToDoList } = useToDo();

    const liTagStyle = {textDecoration: !detail && isCompleted ? "line-through" : null};

    const btnHandler = () => {
        setToDoList(todoList => todoList.map(todo => todo.id === id ? ({...todo, isCompleted: !isCompleted}) : todo))
    }

    return <li key={id} style={liTagStyle}>
        <h3>{detail && "Title: "}{title}</h3>
        <p>{detail && <strong>Description: </strong>}{description}</p>
        {!detail && <p><NavLink  to={`/${isCompleted ? "done" : "open"}/${id}`}>Expand Todo</NavLink></p>}
        {!detail && <button onClick={btnHandler}>Mark As {isCompleted ? "Undone" : "Done"}</button>}
        <hr />
    </li>
}