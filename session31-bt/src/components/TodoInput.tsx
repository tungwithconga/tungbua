import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [input, setInput] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(input.trim());
        setInput('');
    };

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={input} 
                onChange={handleChange} 
                placeholder="Thêm công việc mới"
            />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default TodoInput;
