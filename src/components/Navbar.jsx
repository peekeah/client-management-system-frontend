import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Modal,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";

function Navbar() {
    const [open, setOpen] = useState(false);

    const style = {
        position: "absolute",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box>
        <AppBar color="secondary" position="sticky">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Client Management
            </Typography>
            <Button color="inherit" onClick={() => setOpen(true)}>
                Login
            </Button>
            </Toolbar>
        </AppBar>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Login />
            </Box>
        </Modal>
        </Box>
    );
}

export default Navbar;
