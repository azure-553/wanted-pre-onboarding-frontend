import React, { useEffect, useState } from "react";
import { createTodo, getTodos, updateTodo } from "../../api";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 함수의 재생성 막기 => 불필요한 메모리 낭비 감소
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response);
    } catch (error) {
      console.log("fail fetch", error);
    }
  };

  const handleComplete = async (todoId,todo,isComplete) => {
    console.log('todoId, isComplete : ',todoId, isComplete);
    try {
      await updateTodo(todoId,todo,isComplete);
      const response = await getTodos();
      setTodos(response);
      console.log('todoId, isComplete : ',todoId, isComplete);
    } catch (error) {
      throw error;
    }
  };

  const handleTodo = async () => {
    // newTodo에 내용이 없으면 아무것도 return하지 않도록
    if (!newTodo) return;

    try {
      await createTodo(newTodo);
      fetchTodos();

      // 입력 값 초기화
      setNewTodo("");
    } catch (error) {
      console.log("Todo를 추가하지 못했어요 😢", error);
    }
  };

  return (
    <div>
      <h1>TODO</h1>
      <div>
        <input
          type="text"
          placeholder="오늘 해야할 일을 입력해주세요!"
          onChange={(e) => setNewTodo(e.target.value)}
          data-testid="new-todo-input"
        />
        <button data-testid="new-todo-add-button" onClick={handleTodo}>
          추가
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={(e) => handleComplete(todo.id,todo.todo,e.target.checked)}
            />
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
