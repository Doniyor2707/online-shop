import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Stack, IconButton } from "@mui/material";
// icons
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { adminRoutes } from "../../../../constans/path";

const columns = [
  { id: "id", label: "#", minWidth: 50 },
  {
    id: "images",
    label: "Image",
    minWidth: 50,
    render: (images) => <img src={images[0]} alt="Product" width={64} />,
  },
  { id: "title", label: "Title", minWidth: 50 },
  { id: "price", label: "Price", minWidth: 50, render: (value) => `$${value}` },
  { id: "description", label: "Description", minWidth: 50 },
  {
    id: "category",
    label: "Category",
    minWidth: 50,
    render: (value) => value.name,
  },
];

function ProductsTable({ rows, onDelete, onEdit }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // delete product
  const handleDelete = (id) => {
    onDelete(id);
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
                      <Stack direction={"row"} spacing={1}>
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDelete(row.id)}
                        >
                          <DeleteOutline fontSize="inherit" />
                        </IconButton>

                        <IconButton
                          size="small"
                          color="primary"
                          LinkComponent={Link}
                          to={adminRoutes.productsUpdate.replace(':productId',row.id)}
                        >
                          <EditOutlined fontSize="inherit" />
                        </IconButton>
                      </Stack>
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
    </>
  );
}

export default React.memo(ProductsTable);
