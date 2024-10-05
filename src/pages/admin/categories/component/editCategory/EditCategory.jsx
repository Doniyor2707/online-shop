import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { adminRoutes } from "../../../../../constans/path";
import {
  useGetCategoryIdQuery,
  useUpdateCategoryMutation,
} from "../../../../../app/services/category/categoryApi";

const initialValues = {
  image: "",
  name: "",
};

const validationSchema = Yup.object().shape({
  image: Yup.string()
    .url("Invalid image URL format")
    .required("Image URL is required"),
  name: Yup.string().required(),
});

const EditProduct = () => {
  const { categoryId } = useParams();

  const navigate = useNavigate();

  const getCategoryById = useGetCategoryIdQuery(categoryId, {
    skip: !categoryId,
  });

  const [editCategory, { isLoading }] = useUpdateCategoryMutation();
  // filter data
  const categoryData = useMemo(() => {
    if (
      !getCategoryById.isLoading &&
      getCategoryById.isSuccess &&
      getCategoryById.data
    ) {
      return getCategoryById.data;
    }
    return null;
  }, [
    getCategoryById.data,
    getCategoryById.isLoading,
    getCategoryById.isSuccess,
  ]);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const data = {
          ...values,
          image: values.image,
        };
        await editCategory({ id: categoryId, body: data }).unwrap();

        toast.success("Category edit successfully");

        resetForm();
        navigate(adminRoutes.categories);
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

  console.log(categoryData);

  useEffect(() => {
    if (!formik.values.name && categoryData) {
      formik.setValues({
        name: categoryData.name,
        image: categoryData.image,
      });
    }
  }, [formik.values.name,categoryData]);

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
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
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
