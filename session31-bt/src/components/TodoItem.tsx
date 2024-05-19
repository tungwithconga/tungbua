import React from 'react';

interface TodoItemProps {
    todo: string;
    index: number;
    editTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, editTodo }) => {
    return (
        <li className="todo-item">
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
        </li>
    );
};

export default TodoItem;
