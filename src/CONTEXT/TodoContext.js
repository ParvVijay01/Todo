import {useContext, createContext} from "react"

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            todo:"Todo Msg",
            comleted: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider