import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: string[];
    editTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, editTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} editTodo={editTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
