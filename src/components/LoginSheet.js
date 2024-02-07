import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { login } from "./AuthService";

const boxSX = {
  backgroundColor: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#9e082b",
  },
};

const sheetSX = {
  width: 300,
  mx: "auto", // margin left & right
  my: 10, // margin top & bottom
  py: 5, // padding top & bottom
  px: 8, // padding left & right
  display: "flex",
  flexDirection: "column",
  gap: 2,
  borderRadius: "md",
  boxShadow: "lg",
};



const LoginSheet = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Call the login function from AuthService
      const data = await login(email, password);
      console.log(data);
      setLoginSuccess(true);
      // For testing, show login success data
      // Here, you might want to redirect the user or save the login data/token
    } catch (error) {
      console.error("Failed to log in", error);
      setLoginSuccess(false);
      // Handle login failure (e.g., show an error message)
    }
  };

  return (
    <CssVarsProvider>
      <Sheet sx={sheetSX} component="form" onSubmit={handleSubmit}>
        <div>
          <Typography level="h2" component="h1">
            Welcome to Scuffle.
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="degenerategambler@yahoo.ca"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {loginSuccess && (
        <Typography
          sx={{ color: 'green', textAlign: 'center', mt: 2 }}
        >
          Success!
        </Typography>
      )}
        <Button type="submit" sx={boxSX}>Log in</Button>
        <Typography
          endDecorator={<Link to="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
};

export default LoginSheet;

//make signup logic work and feed it to backend to verify with the database
//need to have the handleSubmit function read the inputs from the "Inputs" in user sign up modal
//need to push error message if it does not go through
