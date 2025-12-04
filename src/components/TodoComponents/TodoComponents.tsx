import {useEffect, useState} from "react";
import type {ITodoModel} from "../../models/ITodoModel.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(response => setTodos(response));
    }, []);

    return (
        <div>
            {
                todos.map((todo) =>  <TodoComponent todo={todo} key={todo.id}  />)
            }
        </div>
    );
};

export default TodoComponents;