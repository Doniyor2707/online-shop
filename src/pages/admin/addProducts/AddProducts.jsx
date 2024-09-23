import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useCreateProductMutation } from "../../../app/services/admin/createProduct/createProduct";

const AddProducts = () => {
  const [productData, setProductData] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
  });

  const [addProduct] = useCreateProductMutation();

  // For storing response
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addProduct(productData).unwrap();
      setResponse(res); 
      setError(null);  

      setProductData({
        image: "",
        title: "",
        description: "",
        category: "",
      });

    } catch (err) {
      setError(err);
      console.error("Error creating product:", err);
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Image Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                name="image"
                value={productData.image}
                onChange={handleChange}
              />
            </Grid>

            {/* Title Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>

            {/* Description Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                name="description"
                value={productData.description}
                onChange={handleChange}
              />
            </Grid>

            {/* Category Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                name="category"
                value={productData.category}
                onChange={handleChange}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button fullWidth variant="contained" type="submit">
                Create Product
              </Button>
            </Grid>

            {/* Response Output */}
            <Grid item xs={12}>
              {response && (
                <Typography color="success.main">
                  Product created successfully! Response: {JSON.stringify(response)}
                </Typography>
              )}
              {error && (
                <Typography color="error">
                  Error creating product: {error.message}
                </Typography>
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddProducts;
