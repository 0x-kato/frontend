import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CssVarsProvider,
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
} from "@mui/joy";

const TipSheet = () => {
  const [receiverUsername, setReceiverUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  // Function to fetch balance
  const fetchBalance = async () => {
    try {
      const response = await axios.get("http://localhost:3333/users/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Fetched balance:", response.data); // Debugging: Log fetched balance
      setBalance(response.data);
    } catch (error) {
      console.error("Failed to fetch balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        alert("You must be logged in to send a tip.");
        return;
      }

      await axios.post(
        "http://localhost:3333/tips/send",
        {
          receiverUsername,
          amount: parseFloat(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setSuccessMessage(
        `Tip of ${amount} sent successfully to ${receiverUsername}!`
      );
      await fetchBalance();
      setReceiverUsername("");
      setAmount("");
      alert("Tip sent successfully!");
    } catch (error) {
      console.error("Failed to send tip:", error);
      alert("Failed to send tip. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
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
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography level="h1" component="h1">
          Send a tip!
        </Typography>
        <FormControl>
          <FormLabel>Receiver Username:</FormLabel>
          <Input
            name="username"
            placeholder="ScuffleUser"
            value={receiverUsername}
            onChange={(e) => setReceiverUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Amount:</FormLabel>
          <Input
            name="amount"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Typography level="body1" sx={{ textAlign: "left", mt: 1 }}>
            Your current balance: {balance}
          </Typography>
        </FormControl>
        {successMessage && (
          <Typography level="body1" sx={{ color: "green", mt: 2 }}>
            {successMessage}
          </Typography>
        )}
        <Button
          type="submit"
          sx={{
            backgroundColor: "black",
            "&:hover": { color: "white", backgroundColor: "#9e082b" },
          }}
        >
          Send tip!
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
};

export default TipSheet;
