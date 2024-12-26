import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setProduct } from "../Redux/productSlice";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!productName.trim()) {
      newErrors.productName = "Product name is required.";
    }

    if (!price || isNaN(price) || price <= 0) {
      newErrors.price = "Enter a valid price greater than 0.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        dispatch(setProduct({ productName, price: parseFloat(price) }));
        console.log("Product added to Redux store:", { productName, price });
      // Reset form after submission
      setProductName("");
      setPrice("");

      navigate('/landingpage')
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: "20px auto" }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            error={!!errors.productName}
            helperText={errors.productName}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={!!errors.price}
            helperText={errors.price}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Product
        </Button>
      </form>
    </Paper>
  );
};

export default AddProduct;
