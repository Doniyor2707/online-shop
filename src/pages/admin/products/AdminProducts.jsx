import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import ProductsTable from "./component/ProductsTable";
import { useGetAllProductsQuery } from "../../../app/services/productsApi/productsApi";

import { adminRoutes } from "../../../constans/path";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDeleteProductsMutation } from "../../../app/services/admin/deleteProduct/deleteProduct";

const AdminProducts = () => {
  //  state
  const [deleteDialog, setDeleteDialog] = useState({
    open: false,
    productId: null,
  });

  // API
  const [deleteProduct, { isLoading: deleteIsLoading }] =
    useDeleteProductsMutation();

  const allProductsRes = useGetAllProductsQuery();

  // Memo

  const allProductsData = useMemo(() => {
    if (allProductsRes.data && allProductsRes.data.length > 0) {
      return allProductsRes.data;
    }
    return [];
  }, [allProductsRes.data]);

  const handleDelete = async (id) => {
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

  const handleEdit = (id) => {
    console.log(id);
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
              onEdit={handleEdit}
            />
          )}
        </Box>
      </Box>

      <Dialog
        open={deleteDialog.open}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Do you wont to delete the product?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} disabled={deleteIsLoading}>
            Disagree
          </Button>
          <Button onClick={handleDelete} autoFocus disabled={deleteIsLoading}>
            {!deleteIsLoading ? "Agree" : <CircularProgress size={"16px"} />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdminProducts;
