import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function Home() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Box>
      <Box sx={{ m: 5, width: "30%"}}>
        <Stack direction="column" spacing={2}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
          <Button variant="contained" color="tertiary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Home;
