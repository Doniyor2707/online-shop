import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCreateProductMutation } from "../../../app/services/admin/createProduct/createProduct";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const initialValues = {
  image: "",
  title: "",
  price: "",
  description: "",
  categoryId: "",
};

const validationSchema = Yup.object().shape({
  image: Yup.string()
    .url("Invalid image URL format")
    .required("Image URL is required"),
  title: Yup.string().required(),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive value")
    .required("Price is required"),
  description: Yup.string().required(),
  categoryId: Yup.number().required(),
});

const AddProducts = () => {
  const [addProduct] = useCreateProductMutation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await addProduct({
          ...values,
          images: [values.image],
        }).unwrap();

        if (!res && res.error) {
          toast.error(res.error);
          return;
        }

        toast.success("Product add successfully");

        resetForm();
      } catch (err) {
        if (err.status === "FETCH_ERROR") {
          toast.warning("Connection failed!");
        } else {
          toast.error(err.data?.message);
        }
      }
    },
  });

  return (
    <Container>
      <Box mt={4}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                variant="outlined"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                variant="outlined"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl
                fullWidth
                error={
                  formik.touched.categoryId && Boolean(formik.errors.categoryId)
                }
              >
                <InputLabel id="demo-simple-select-label" size="small">
                  Category
                </InputLabel>
                <Select
                  rows={3}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                  size="small"
                >
                  <MenuItem value={1}>Ten</MenuItem>
                  <MenuItem value={2}>Twenty</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {!formik.isSubmitting ? (
                  "Create Product"
                ) : (
                  <CircularProgress size={"24px"} />
                )}
              </Button>
            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddProducts;
