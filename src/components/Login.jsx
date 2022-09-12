import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function Login() {
    return (
        <Box>
        <Stack direction="column" spacing={2}>
            <Typography variant="h5" align="center">
            Login
            </Typography>
            <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            // value={userData.name}
            // onChange={handleChange}
            />
            <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            // value={userData.name}
            // onChange={handleChange}
            />
            <Button color="accent" variant="contained">
            Login
            </Button>
        </Stack>
        </Box>
    );
}

export default Login;
