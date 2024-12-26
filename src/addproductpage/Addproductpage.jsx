import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import AddProduct from "../productpage/Addproduct";

const Addproductpage = () => {
    return(
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
            <AddProduct />
        </Box>
      </Box>
    )
}

export default Addproductpage