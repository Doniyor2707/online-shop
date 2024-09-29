import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

import { useGetAllProductsQuery } from "../../../app/services/productsApi/productsApi";
import ProductsTable from "./component/ProductsTable";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteProductsMutation } from "../../../app/services/admin/deleteProduct/deleteProduct";
import { adminRoutes } from "../../../constans/path";
import DeleteProduct from "../deleteProduct/DeleteProduct";
import EditProduct from "../editProduct/EditProduct";

const AdminProducts = () => {
  //  delete state
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    productId: null,
  });

  // edit state
  const [editDialog, setEditDialog] = useState({
    open: false,
    productId: null,
    images: "",
    price: "",
    title: "",
    description: "",
    categoryId: "",
  });

  // API
  const [deleteProduct, { isLoading: deleteIsLoading }] =
    useDeleteProductsMutation();
  // all product res
  const allProductsRes = useGetAllProductsQuery();

  // Memo
  const allProductsData = useMemo(() => {
    if (allProductsRes.data && allProductsRes.data.length > 0) {
      return allProductsRes.data;
    }
    return [];
  }, [allProductsRes.data]);

  
  // handle delete
  const handleDelete = async () => {
    if (!deleteDialog.productId) {
      throw new Error("`deleteDialog.productId` is required");
    }
    try {
      const res = await deleteProduct(deleteDialog.productId).unwrap();

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

  const handleEdit = async () => {
    if (!editDialog.productId) {
      throw new Error(`${editDialog.productId} is required`);
    }

    try {
      const res = await editDialog(
        deleteDialog.productId,
        deleteDialog
      ).unwrap();

      if (!res) {
        toast.error("Product was not edit");
        return;
      }

      toast.success("Product edit successfully");
    } catch (err) {
      if (err.status === "FETCH_ERROR") {
        toast.warn("Connection Network error");

        console.log(err);
      }
    }
  };

  const handleOpenDeleteDialog = (productId) => {
    setDeleteDialog({
      open: true,
      productId,
    });
  };

  const handleCloseDeleteDialog = (productId) => {
    if (deleteIsLoading) return;

    setDeleteDialog({
      open: false,
      productId,
    });
  };

  const handleOpenEditDialog = (
    productId,
    image,
    price,
    title,
    description,
    categoryId
  ) => {
    setEditDialog({
      open: true,
      productId,
      image,
      price,
      title,
      description,
      categoryId,
    });
  };

  const handleCloseEditDialog = (productId) => {

    setEditDialog({
      open: false,
      productId,
    });
  };

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} p={2}>
        {/* Title */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5" fontWeight={700} color={"#3F4646"} mb={5}>
            Products({allProductsData.length})
          </Typography>

          <Button
            LinkComponent={Link}
            to={adminRoutes.addProducts}
            variant="contained"
            startIcon={<AddIcon />}
          >
            New product
          </Button>
        </Box>

        <Box>
          {/* Products list */}
          {allProductsRes.isLoading || allProductsRes.isFetching ? (
            "Products loading..."
          ) : (
            <ProductsTable
              rows={allProductsData}
              onDelete={handleOpenDeleteDialog}
              onEdit={handleOpenEditDialog}
            />
          )}
        </Box>
      </Box>

  

      {/* Delete product */}
      <DeleteProduct
        handleDelete={handleDelete}
        deleteDialog={deleteDialog}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        deleteIsLoading={deleteIsLoading}
      />
    </>
  );
};

export default AdminProducts;
