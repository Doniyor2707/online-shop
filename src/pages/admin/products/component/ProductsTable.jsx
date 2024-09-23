import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Modal, Typography, Snackbar, Alert } from "@mui/material";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { useDeleteProductsMutation } from "../../../../app/services/admin/deleteProduct/deleteProduct";

const columns = [
  { id: "id", label: "#", minWidth: 50 },
  {
    id: "image",
    label: "Image",
    minWidth: 50,
    render: (value) => <img src={value} alt="Product" width={64} />,
  },
  { id: "title", label: "Title", minWidth: 50 },
  { id: "description", label: "Description", minWidth: 50 },
  { id: "category", label: "Category", minWidth: 50 },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

function ProductsTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const [id, setId] = React.useState([]);

  const handleOpen = (id, title) => {
    setId([id, title]);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // API
  const [deleteProduct] = useDeleteProductsMutation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async () => {
    
    try {
      handleClose();
      const res = await deleteProduct(id[0]).unwrap();

      setSnackbarMessage(`${id[0]}: ${id[1]}`);
      
      setSnackbarOpen(true);
    } catch (err) {
      setSnackbarMessage(`Error deleting product: ${err.message}`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align={"right"}>Operation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.render ? column.render(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right">
                      <Box display={"flex"} alignItems={"center"} gap={3}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleOpen(row.id, row.title)}
                        >
                          Delete
                        </Button>

                        <Button variant="outlined">Edit</Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              {/* modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    gap={2}
                  >
                    Do you really want to delete: {id[1]}?
                  </Typography>

                  <Box display={"flex"} justifyContent={"flex-end"} mt={2}>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      startIcon={<ClearIcon />}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ ml: "5px" }}
                      startIcon={<DeleteIcon />}
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Modal>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Snackbar for success/error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default React.memo(ProductsTable);
