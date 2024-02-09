import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";

const boxSX = {
  backgroundColor: "black",
  "&:hover": {
    color: "white",
    backgroundColor: "#9e082b",
  },
};

const sheetSX = {
  width: 500,
  mx: "auto", // margin left & right
  my: 10, // margin top & bottom
  py: 4, // padding top & bottom
  px: 8, // padding left & right
  display: "flex",
  flexDirection: "column",
  gap: 6,
  borderRadius: "lg",
  boxShadow: "lg",
};

const TipSheet = () => {
  const [balance, setBalance] = useState(0); // State to store the fetched balance
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/users/balance",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setBalance(response.data);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <CssVarsProvider>
      <Sheet sx={sheetSX} component="form">
        <div>
          <Typography level="h1" component="h1">
            Send a tip!
          </Typography>
        </div>
        <FormControl>
          <FormLabel>Receiver Username:</FormLabel>
          <Input name="username" type="username" placeholder="ScuffleUser" />
        </FormControl>
        <FormControl>
          <FormLabel>Amount:</FormLabel>
          <Input name="amount" type="amount" placeholder="0.00" />
          <Typography level="body1" sx={{ textAlign: "left", mt: 1 }}>
            Your current balance: {balance}
          </Typography>
        </FormControl>
        <Button type="submit" sx={boxSX}>
          Send tip!
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default TipSheet;
