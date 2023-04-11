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
