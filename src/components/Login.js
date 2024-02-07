import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [errrorMessage, setErrorMessage] = React.useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const { data } = await axios.post("http://localhost:3333/auth/login", form);
    if (data.status === parseInt("401")) {
      setErrorMessage(data.response);
    } else {
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate("/homepage");
    }
  };
  <Box
    component="form"
    onSubmit={handleSubmit}
    noValidate
    sx={{ mt: 1 }}
  ></Box>;
  <Typography component="p" variant="p" color="red">
    {errrorMessage}
  </Typography>;
}
