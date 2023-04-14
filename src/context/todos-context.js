import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/todosDB"

export const ToDoContext = createContext();

export const ToDoProvider = ({children}) => {

    const [todoList, setToDoList] = useState([]);

    const getToDoList = async () => {
        try {
            const {status, data: {todos}} = await fakeFetch("https://example.com/api/todos");
            if (status === 200) {
                setToDoList(todos)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => getToDoList, []);

    return (<ToDoContext.Provider value={{todoList, setToDoList}}>
        {children}
    </ToDoContext.Provider>)
}

export const useToDo = () => useContext(ToDoContext);