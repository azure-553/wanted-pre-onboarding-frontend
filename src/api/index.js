import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/auth",
});

export const signup = (email, password) => {
  return authAxios.post("/signup", { email, password });
};

export const signin = async (email, password) => {
  try {
    const response = await authAxios.post("/signin", { email, password });
    return {
      token: response.data.access_token,
    };
  } catch (error) {
    throw error;
  }
};

// Todolist API 연결
const todoAxios = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/todos",
});

export const createTodo = async (todo) => {
  try {
    const access_token = localStorage.getItem("token");
    const response = await todoAxios.post(
      "/",
      { todo },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const access_token = localStorage.getItem("token");
    const response = await todoAxios.get("/", {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (todoId, todo ,isCompleted) => {
  try {
    const access_token = localStorage.getItem("token");
    const response = await todoAxios.put(
      `/${todoId}`,
      {todo: todo,isCompleted: isCompleted },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const access_token = localStorage.getItem("token");
    const response = await todoAxios.delete(`/${todoId}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
