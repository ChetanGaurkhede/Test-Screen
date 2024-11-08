import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  TablePagination,
  Paper,
  Select,
  MenuItem as Option,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
} from "@mui/icons-material";

const headCells = [
  { id: "productName", label: "Product Name", numeric: false },
  { id: "category", label: "Category", numeric: false },
  { id: "unitPrice", label: "Unit Price", numeric: true },
  { id: "quantityInStock", label: "In Stock", numeric: true },
  { id: "discountEnabled", label: "Discount", numeric: true },
  { id: "totalValue", label: "Total Value", numeric: true },
  { id: "action", label: "Action", numeric: false },
  { id: "status", label: "Status", numeric: false },
];

// function createProductData(products) {
//   return products.map((product) => ({
//     ...product,
//     unitPrice: parseFloat(product.sellingPrice),
//     totalValue:
//       parseFloat(product.sellingPrice) * parseInt(product.quantityInStock, 10),
//     status: product.expiryEnabled ? "Active" : "Expired",
//   }));
// }

function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
  check,
  isAllSelected,
}) {
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            onChange={(event) => check(event)}
            checked={isAllSelected}
            inputProps={{ "aria-label": "select all products" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

const EnhancedTable = ({ data, ...extraData }) => {
  console.log("data", data, extraData);
  const [productData, setProductData] = useState([...data]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("productName");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [actions, setActions] = useState(
    productData.map((product) => product.action || "")
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    console.log("handleRequestSort", orderBy, order);
  };

  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    setIsAllSelected(selected.length === productData.length);
  }, [selected, productData]);

  const handleSelectAllClick = (event) => {
    const newSelected = event.target.checked
      ? productData.map((_, index) => index)
      : [];
    setSelected(newSelected);
  };

  const handleClick = (event, index) => {
    const selectedIndex = selected.indexOf(index);
    const newSelected =
      selectedIndex === -1
        ? [...selected, index]
        : selected.filter((item) => item !== index);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeAction = (event, index) => {
    const newActions = [...actions];
    newActions[index] = event.target.value;
    setActions(newActions);
  };

  // filter products based on selected action

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              check={handleSelectAllClick}
              isAllSelected={isAllSelected}
            />
            <TableBody>
              {productData.length > 0 &&
                productData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product, index) => (
                    <TableRow
                      key={index}
                      hover
                      role="checkbox"
                      aria-checked={selected.indexOf(product.id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={selected.indexOf(index) !== -1}
                          onChange={(event) => handleClick(event, index)}
                        />
                      </TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell align="right">{product.unitPrice}</TableCell>
                      <TableCell align="right">
                        {product.quantityInStock}
                      </TableCell>
                      <TableCell align="right">
                        {product.discountEnabled ? "Yes" : "No"}
                      </TableCell>
                      <TableCell align="right">{product.totalValue}</TableCell>
                      <TableCell>
                        <Select
                          value={actions[index] || product.actions}
                          onChange={(event) => handleChangeAction(event, index)}
                          sx={{ minWidth: 120 }}
                        >
                          {/* <option value="publish">Publish</option>
                          <option value="unpublish">Unpublish</option>
                          <option value="delete">Delete</option> */}
                          <Option value="publish">Publish</Option>
                          <Option value="unpublish">Unpublish</Option>
                          <Option value="delete">Delete</Option>
                        </Select>
                      </TableCell>
                      <TableCell>{product.status}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={productData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
