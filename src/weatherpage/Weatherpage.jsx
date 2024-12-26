import { Box } from "@mui/material"
import Sidebar from "../sidebar/Sidebar"
import Weatherdetails from "../Weather/Weatherdetails"
import Weathersearch from "../Weather/Weathersearch"

const Weatherpage = () => {
    return(
        <>
        <Sidebar />
        <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
          minHeight: "100vh", // Ensures full-height centering
          backgroundColor: "#f9f9f9", // Optional: Add a light background
        }}
      >
        <div>

        <Weatherdetails />
        <Weathersearch />
        </div>
      </Box>
    </Box>
        </>
    )
}

export default Weatherpage