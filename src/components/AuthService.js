import axios from "axios";

const API_URL = "http://localhost:3333";

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error", error.response.data);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error", error.response.data);
    throw error;
  }
};
