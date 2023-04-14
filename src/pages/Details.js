import { useParams } from "react-router";
import { useToDo } from "../context/todos-context";
import { ToDoCard } from "../components/ToDoCard";


export function Details () {

    const {todoId} = useParams();
    const {todoList} = useToDo();

    const selectedToDo = todoList.find(({id}) => id === Number(todoId));

    return (
        <div>
            <h1>Todo Description</h1>
            <ToDoCard {...selectedToDo} detail/>
        </div>
    )
}