import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import Modal from './Modal';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [error, setError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentTodo, setCurrentTodo] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo: string) => {
        if (!todo) {
            setError('Tên công việc không được để trống');
            return;
        }
        if (todos.includes(todo)) {
            setError('Tên công việc không được phép trùng');
            return;
        }
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setError('');
    };

    const editTodo = (index: number) => {
        setCurrentIndex(index);
        setCurrentTodo(todos[index]);
        setIsModalOpen(true);
    };

    const updateTodo = () => {
        if (currentIndex === null || !currentTodo) {
            setError('Tên công việc không được để trống');
            return;
        }
        if (todos.includes(currentTodo)) {
            setError('Tên công việc không được phép trùng');
            return;
        }
        const newTodos = [...todos];
        newTodos[currentIndex] = currentTodo;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setIsModalOpen(false);
        setError('');
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            {error && <p className="error">{error}</p>}
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} editTodo={editTodo} />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Edit Todo</h2>
                <input
                    type="text"
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                />
                <button onClick={updateTodo}>Update</button>
            </Modal>
        </div>
    );
};

export default TodoApp;
