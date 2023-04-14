import React, { useState } from "react";
import * as _ from "../../../common/TodoStyle";
import { deleteTodo, getTodos, updateTodo } from "../../../api";

const TodoItem = ({ todo, setTodos }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo.todo);

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

  const handleModify = () => {
    setIsEditMode(true);
  };

  const handleSubmit = async (todoId, modifiedTodo, isComplete) => {
    try {
      console.log(todoId, modifiedTodo, isComplete);
      await updateTodo(todoId, modifiedTodo, isComplete);
      setTodos(await getTodos());
      setIsEditMode(false); // 수정모드 비활성화
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

  const handleCancel = () => {
    setModifiedTodo(todo.todo);
    setIsEditMode(false);
  };

  return (
    <>
      <_.TodoContentWrap key={todo.id}>
        <_.Checkbox
          type="checkbox"
          checked={todo.isComplete}
          onChange={(e) => handleComplete(todo.id, todo.todo, e.target.checked)}
        />
        {isEditMode ? (
          <>
            <div>
              {" "}
              <_.TodoEditInput
                type="text"
                value={modifiedTodo}
                data-testid="modify-input"
                onChange={(e) => setModifiedTodo(e.target.value)}
              />
            </div>
            <_.TodoBtnWrap>
              <button
                data-testid="submit-button"
                onClick={(e) => handleSubmit(todo.id, modifiedTodo, true)}
              >
                제출
              </button>
              <button
                data-testid="cancel-button"
                onClick={() => handleCancel()}
              >
                취소
              </button>
            </_.TodoBtnWrap>
          </>
        ) : (
          <>
            <_.TodoContent>{todo.todo}</_.TodoContent>
            <_.TodoBtnWrap>
              <button
                data-testid="modify-button"
                onClick={() => handleModify()}
              >
                수정
              </button>
              <button
                data-testid="delete-button"
                onClick={(e) => handleDelete(todo.id)}
              >
                삭제
              </button>
            </_.TodoBtnWrap>
          </>
        )}
      </_.TodoContentWrap>
    </>
  );
};

export default TodoItem;
