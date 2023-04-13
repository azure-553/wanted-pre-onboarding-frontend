import React from "react";
import { deleteTodo, getTodos, updateTodo } from "../../../api";

const TodoItem = ({ todo, setTodos }) => {
  const handleComplete = async (todoId, todo, isComplete) => {
    console.log("todoId, isComplete : ", todoId, isComplete);
    try {
      await updateTodo(todoId, todo, isComplete);
      const response = await getTodos();
      setTodos(response);
      console.log("todoId, isComplete : ", todoId, isComplete);
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = async (todoid) => {
    try {
      console.log(todoid);
      await deleteTodo(todoid);
      setTodos((todos) => todos.filter((todo) => todo.id !== todoid));
      console.log("delete!");
      return null;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <li key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={(e) =>
              handleComplete(todo.id, todo.todo, e.target.checked)
            }
          />
          {todo.todo}
        </label>
        <button data-testid="modify-button">수정</button>
        <button
          data-testid="delete-button"
          onClick={(e) => handleDelete(todo.id)}
        >
          삭제
        </button>
      </li>
      ;
    </>
  );
};

export default TodoItem;
