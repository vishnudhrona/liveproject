import { Box } from "@mui/material"
import Sidebar from "../sidebar/Sidebar"
import Weatherdetails from "../Weather/Weatherdetails"
import Weathersearch from "../Weather/Weathersearch"

const Weatherpage = () => {
    return(
        <>
        <Sidebar />
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