import React from "react";
import "./main.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <div>
      <div className="mainbox">
        <div className="login_main">
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
        </div>
        <div className="txtfld">
          <TextField
            id="standard-basic"
            fullWidth
            label="Name"
            variant="standard"
          />
        </div>
        <div className="txtfld">
          <TextField
            id="standard-basic"
            fullWidth
            label="Email"
            variant="standard"
          />
        </div>
        <div className="txtfld">
          <TextField
            id="standard-basic"
            fullWidth
            label="Password"
            variant="standard"
          />
        </div>
        <div className="txtfld">
          <TextField
            id="standard-basic"
            fullWidth
            label="Confirm Password"
            variant="standard"
          />
        </div>

        <Button variant="contained" fullWidth>
          Register
        </Button>``
        <Box
        sx={{
          p: 1,
         
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <Typography variant="body2" gutterBottom>
          Already registered ? <a>login</a>
        </Typography>
        </Box>
      </div>
    </div>
  );
};

export default Login;
