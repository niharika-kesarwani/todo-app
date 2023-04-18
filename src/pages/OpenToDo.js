import { ToDoCard } from "../components/ToDoCard";
import { useToDo } from "../context/todos-context"

export function OpenToDo () {
    
    const { todoList } = useToDo();

    const openToDoList = todoList.filter(({isCompleted}) => !isCompleted)
    
    return (
        <div>
        <h1>Open Todos</h1>
        <h2>Total todos: {openToDoList.length}</h2>
        <ul>
        {
            openToDoList.map(todo => <ToDoCard {...todo} open/>)
        }
        </ul>
        </div>)
}