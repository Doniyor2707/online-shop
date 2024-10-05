import React, { useMemo, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  useDeleteCategoryItemMutation,
  useGetAllCategoryQuery,
} from "../../../app/services/category/categoryApi";

import CategoryContent from "./component/CategoryContent";
import { toast } from "react-toastify";
import DeleteCategory from "./component/deleteCategory/DeleteCategory";

const Category = () => {
  // api
  const allCategoryRes = useGetAllCategoryQuery();

  const [deleteCategory, { isLoading }] = useDeleteCategoryItemMutation();

  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    categoryId: null,
  });

  const handleOpenDeleteDialog = (categoryId) => {
    setDeleteDialog({
      open: true,
      categoryId,
    });
  };

  const handleCloseDeleteDialog = (categoryId) => {
    setDeleteDialog({
      open: false,
      categoryId,
    });
  };

  const allCategoryData = useMemo(() => {
    if (allCategoryRes.data && allCategoryRes.data.length) {
      return allCategoryRes.data;
    }
    return [];
  }, [allCategoryRes.data]);

  const handleDeleteCategory = async () => {
    if (!deleteDialog.categoryId) {
      throw new Error("`deleteDialog.productId` is required");
    }
    try {
      const res = await deleteCategory(deleteDialog.categoryId).unwrap();
      console.log(res);

      if (!res) {
        toast.error("Product was not deleted");
        return;
      }

      toast.success("Product deleted successfully");

      handleCloseDeleteDialog();
    } catch (err) {
      if (err.status === "FETCH_ERROR") {
        toast.warn("Connection Network error");

        console.log(err);
      }
    }
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom mb={5}>
          Categories
        </Typography>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            {allCategoryData.map((category) =>
              allCategoryRes.isLoading || allCategoryRes.isFetching ? (
                "Is Loading..."
              ) : (
                <CategoryContent
                  key={category.id}
                  {...category}
                  onDelete={handleOpenDeleteDialog}
                />
              )
            )}
          </Grid>
        </Grid>
      </Box>
      <DeleteCategory
        handleDeleteCategory={handleDeleteCategory}
        deleteDialog={deleteDialog}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        deleteIsLoading={isLoading}
      />
    </>
  );
};

export default Category;
