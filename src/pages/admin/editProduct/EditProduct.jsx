import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useUpdateProductsMutation } from "../../../app/services/admin/updateProduct/updateProduct";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../app/services/productsApi/productsApi";
import { adminRoutes } from "../../../constans/path";

const initialValues = {
  images: "",
  title: "",
  price: "",
  description: "",
  categoryId: "",
};

const validationSchema = Yup.object().shape({
  images: Yup.string()
    .url("Invalid image URL format")
    .required("Image URL is required"),
  title: Yup.string().required(),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive value")
    .required("Price is required"),
  description: Yup.string().required(),
  categoryId: Yup.string().required(),
});

const EditProduct = () => {
  
  // useParams bu pathda yozgan urlning ": " shu qisminda keyingi qismini oladi
  const { productId } = useParams();

  const navigate = useNavigate();

  // skib bu agar product id bo'lmasa o'tkasib yuboradi
  const getProductById = useGetProductByIdQuery(productId, {
    skip: !productId,
  });
  const [editProduct, { isLoading }] = useUpdateProductsMutation();

  // filter data
  const productData = useMemo(() => {
    if (
      !getProductById.isLoading &&
      getProductById.isSuccess &&
      getProductById.data
    ) {
      return getProductById.data;
    }
    return null;
  }, [getProductById.data, getProductById.isLoading, getProductById.isSuccess]);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const data = {
          ...values,
          images: [values.images],
        };
        await editProduct({ id: productId, body: data }).unwrap();

        toast.success("Product edit successfully");

        resetForm();
        navigate(adminRoutes.products);
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
    if (!formik.values.title && productData) {
      formik.setValues({
        categoryId: productData.category.id,
        title: productData.title,
        price: productData.price,
        description: productData.description,
        images: JSON.parse(productData.images[0]),
      });
    }
  }, [formik, productData]);

  return (
    <Card sx={{ p: "10px" }}>
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
                value={formik.values.images}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.images && Boolean(formik.errors.images)}
                helperText={formik.touched.images && formik.errors.images}
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
          </Grid>
          <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
            <Button autoFocus disabled={isLoading} type="submit">
              {!isLoading ? "Save" : <CircularProgress size={"16px"} />}
            </Button>
          </Box>
        </form>
      </Box>
    </Card>
  );
};

export default EditProduct;
