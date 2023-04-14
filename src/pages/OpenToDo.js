import { ToDoCard } from "../components/ToDoCard";
import { useToDo } from "../context/todos-context"

export function OpenToDo () {
    
    const { todoList } = useToDo();
    
    return (
        <div>
        <h1>Open Todos</h1>
        <ul>
        {
            todoList.filter(({isCompleted}) => !isCompleted).map(todo => <ToDoCard {...todo}/>)
        }
        </ul>
        </div>)
}