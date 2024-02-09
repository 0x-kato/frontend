import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";

function LogBanner() {
  const auth = React.useState(true);
  const username = localStorage.getItem("username") || null;
  const isUsernameValid = username && username !== "undefined";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup></FormGroup>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: "Monospace", fontWeight: "bold", flexGrow: 1 }}
          >
            SCUFFLE
          </Typography>
          {auth && (
            <div style={{ display: "flex", alignItems: "center" }}>
              {isUsernameValid && (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginRight: 2 }} // Adjust spacing as needed
                >
                  {username}
                </Typography>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default LogBanner;
