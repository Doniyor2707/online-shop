import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Snackbar, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteProductsMutation } from "../../../../app/services/admin/updateProducts/products";

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

function ProductsTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [alertType, setAlertType] = React.useState("success");
  const [message, setMessage] = React.useState("");

  // API
  const [deleteProduct] = useDeleteProductsMutation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteProduct(id).unwrap();
      console.log(res);

      setAlertType("success");
      setMessage(`Product with ID: ${id} has been deleted successfully!`);
    } catch (err) {
      setAlertType("error");
      setMessage(`Failed to delete product with ID: ${id}`);
    } finally {
      setOpen(true); // Show Snackbar
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
                          startIcon={<DeleteIcon />}
                          color="error"
                          onClick={() => handleDelete(row.id)}
                        >
                          Delete
                        </Button>
                        <Button variant="outlined">Edit</Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
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

      {/* Snackbar for displaying success or error message */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default React.memo(ProductsTable);
