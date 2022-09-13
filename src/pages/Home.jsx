import { Box } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
// import Signup from "../components/Signup";

function Home() {
  return (
    <>
      <Navbar />
      <Box mt={20}>
        <Box
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%", lg: "30%" },
            m: "auto",
          }}
        >
          {/* <Signup /> */}
          <Login />
        </Box>
      </Box>
    </>
  );
}

export default Home;
