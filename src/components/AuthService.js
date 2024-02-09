import axios from "axios";

const API_URL = "http://localhost:3333";

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration error", error.response.data);
    throw new Error(error.response.data.message || "Registration failed.");
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    localStorage.setItem("username", response.data.username);
    localStorage.setItem("access_token", response.data.tokens.access_token);
    localStorage.setItem("refresh_token", response.data.tokens.refresh_token);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Login error", error.response.data);
    throw new Error(error.response.data.message || "Login failed.");
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem("access_token");
    console.log("Token:", token);
    const response = await axios.post(
      `${API_URL}/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Logout error",
      error.response ? error.response.data : "Logout failed"
    );
    throw new Error(error.response.data.message || "Logout failed.");
  } finally {
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
};
