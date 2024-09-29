import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { memo } from "react";

const DeleteProduct = ({
  handleDelete,
  deleteDialog,
  handleCloseDeleteDialog,
  deleteIsLoading,
}) => {
  return (
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
          {!deleteIsLoading ? "Delete" : <CircularProgress size={"16px"} />}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(DeleteProduct);
