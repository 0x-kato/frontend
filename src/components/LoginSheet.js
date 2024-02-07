import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import Login from "./Login";

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
}

const LoginSheet = () => {
  return (
    <CssVarsProvider>
      <Sheet
        sx={sheetSX}
      >
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
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="password" />
        </FormControl>
        <Button sx={boxSX}>
          Log in
          <Login />
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
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
