import { ToDoCard } from "../components/ToDoCard";
import { useToDo } from "../context/todos-context";
import "../styles/DoneToDo.css"

export function DoneToDo () {
    const { todoList } = useToDo();

    const doneToDoList = todoList.filter(({isCompleted}) => isCompleted);

    return (
    <div>
        <h1>Done Todos</h1>
        <h2>Total todos: {doneToDoList.length}</h2>
        <ul>
        {
            doneToDoList.map(todo => <div>
                <ToDoCard {...todo} done/>
            </div>)
        }
        </ul>
        </div>)
}