import { ToDoCard } from "../components/ToDoCard";
import { useToDo } from "../context/todos-context"

export function DoneToDo () {
    const { todoList } = useToDo();

    return (
    <div>
        <h1>Done Todos</h1>
        <ul>
        {
            todoList.filter(({isCompleted}) => isCompleted).map(todo => <div>
                <ToDoCard {...todo}/>
            </div>)
        }
        </ul>
        </div>)
}