import type {FC} from "react";
import type {ITodoModel} from "../../models/ITodoModel.ts";

type PropType = {todo: ITodoModel};

const TodoComponent:FC<PropType> = ({todo}) => {
    return (
        <div>
            <h2>To do title - {todo.title}</h2>
            <p>To do status - {JSON.stringify(todo.completed)}</p>
            <p>User id = {todo.userId}, To do id - {todo.id}</p>
        </div>

    );
};

export default TodoComponent;