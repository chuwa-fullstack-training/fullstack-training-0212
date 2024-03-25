import React from 'react';
import { toggleComplete } from './redux/action';
import { useDispatch } from 'react-redux';

function TodoItem({todo}) {
    const dispatch = useDispatch();
    const handleToggleComplete = () => {
        dispatch(toggleComplete(todo.id));
    };
    return (
        <li className='list-group-item'>
            <input
                type='checkbox'
                className="form-check-input"
                checked={todo.completed}
                onChange={handleToggleComplete}
                id={todo.id}
            />
            <label
                className="form-check-label"
                htmlFor={todo.id}
            >
                {todo.content}
            </label>
        </li>
    );
}
export default TodoItem;