import { useToDo } from "../context/todos-context";
import { ToDoCard } from "../components/ToDoCard";
import "../styles/Summary.css"

export function Summary () {
    const {todoList} = useToDo();
    return (
        <div>
            <ul>
            {
                todoList.map(todo => <ToDoCard {...todo}/>)
            }
            </ul>
        </div>
    )
}