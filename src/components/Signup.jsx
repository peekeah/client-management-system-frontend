import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

function Signup() {
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
        <Stack direction="column" spacing={2}>
        <Typography align="center" variant="h5">
            Sign Up
        </Typography>
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
            type="password"
            value={userData.password}
            onChange={handleChange}
        />
        <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
        />
        <Button variant="contained" color="tertiary" onClick={handleSubmit}>
            Sign up
        </Button>
        </Stack>
    );
}

export default Signup;
