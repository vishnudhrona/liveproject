import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from "../Redux/productSlice";

const Productpage = () => {
    const dispatch = useDispatch()

    const product = useSelector((state) => state.productDate)
    
    const handleDelete = (index) => {
        dispatch(deleteProduct(index)); // Dispatch the action with the index
      };

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Box component="span" sx={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                    Product List
                </Box>
                <Button variant="contained" component={Link} to="/addproduct">Add Product</Button>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.map((product, index) => (
                            <TableRow
                                key={index} // Use index if no unique ID is available, but a unique property is better
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.productName}
                                </TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="center">
                                    <IconButton onClick={() => handleDelete(index)} aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Productpage;
