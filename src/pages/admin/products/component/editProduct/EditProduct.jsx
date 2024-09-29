import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import { useUpdateProductsMutation } from "../../../../../app/services/admin/updateProduct/updateProduct";
import { toast } from "react-toastify";

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
  category: Yup.string().required(),
});

const EditProduct = ({ handleEdit, editDialog, handleCloseEditDialog }) => {
  const [editProduct, { isLoading }] = useUpdateProductsMutation();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      description: "",
      category: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await editProduct(editDialog.id, values).unwrap();

        if (!res) {
          toast.error("Response error");
          return;
        }

        toast.success("Product edit successfully");
      } catch (err) {
        if (err.status === "FETCH_ERROR") {
          toast.warn("Connection Network error");

          console.error(err);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (
      !formik.values.image &&
      !formik.values.price &&
      !formik.values.title &&
      !formik.values.description &&
      !formik.values.category
    )
    formik.setFieldValue("price", editDialog.price);
    formik.setFieldValue("title", editDialog.title);
    formik.setFieldValue("description", editDialog.description);
    formik.setFieldValue("image", editDialog.image);
  }, [editDialog]);

  return (
    <Dialog
      open={editDialog.open}
      onClose={handleCloseEditDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Container>
        <Box mt={4}>
          <Typography variant="h5" mb={2}>
            Edit Product
          </Typography>
          <form onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Image URL"
                  variant="outlined"
                  name="image"
                  value={formik.values.image || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
                  onBlur={formik.handleBlur}
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
                  onBlur={formik.handleBlur}
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
                  onBlur={formik.handleBlur}
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
                <TextField
                  fullWidth
                  label="Category"
                  variant="outlined"
                  name="category"
                  value={formik.values.category || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button
                onClick={handleCloseEditDialog}
                disabled={isLoading}
                color="error"
              >
                Cancel
              </Button>
              <Button
                onClick={handleEdit}
                autoFocus
                disabled={isLoading}
                type="submit"
              >
                {!isLoading ? "Save" : <CircularProgress size={"16px"} />}
              </Button>
            </DialogActions>
          </form>
        </Box>
      </Container>
    </Dialog>
  );
};

export default EditProduct;
