import React from "react";
import Productpage from "../productpage/Productpage";
import Sidebar from "../sidebar/Sidebar";
import { Box } from "@mui/material";

const Landingpage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          minHeight: "100vh", 
          backgroundColor: "#f9f9f9",
        }}
      >
        <Productpage />
      </Box>
    </Box>
  );
};

export default Landingpage;
