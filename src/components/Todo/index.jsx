import React, { useEffect, useState } from 'react'
import { getTodos, updateTodo } from '../../api';

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response);
      } catch (error) {
        console.log('fail fetch',error);
      }
    };
    fetchTodos();
  },[]);

  const handleCompelete = async (todoId, isCompelete) => {
    try {
      await updateTodo(todoId, null ,isCompelete);
      const response = await getTodos();
      setTodos(response)
    } catch (error) {
      throw error;
    }
  }

  return (
    <div>
      <h1>TODO</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.isCompelete}
              onChange={e => handleCompelete(todo.id, e.target.checked)}
            />
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}
