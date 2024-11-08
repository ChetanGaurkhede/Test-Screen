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

function createProductData(products) {
  return products.map((product) => ({
    ...product,
    unitPrice: parseFloat(product.sellingPrice),
    totalValue:
      parseFloat(product.sellingPrice) * parseInt(product.quantityInStock, 10),
    status: product.expiryEnabled ? "Active" : "Expired",
  }));
}

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            onChange={(event) => onSelectAllClick(event)}
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

const EnhancedTable = () => {
  const [productData, setProductData] = useState([
    {
      productName: "Product 1",
      category: "Category 1",
      sellingPrice: "3232",
      costPrice: "12",
      quantityInStock: "8",
      orderType: "Type 1",
      discountEnabled: true,
      unitPrice: 3232,
      expiryEnabled: true,
      returnPolicy: false,
      shortDescription: "Description 1",
      longDescription: "Long Description 1",
      action: "publish",
      productImage: {
        name: "Image1.svg",
        size: 76051,
        type: "image/svg+xml",
      },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "Product 2",
      category: "Category 2",
      sellingPrice: "1500",
      costPrice: "10",
      quantityInStock: "15",
      orderType: "Type 2",
      discountEnabled: false,
      unitPrice: 1500,
      expiryEnabled: false,
      returnPolicy: true,
      shortDescription: "Description 2",
      longDescription: "Long Description 2",
      action: "publish",
      productImage: {
        name: "Image2.svg",
        size: 60000,
        type: "image/svg+xml",
      },
      date: "2024-11-07",
      time: "2:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "iPhone 13 Pro",
      category: "Gadgets",
      sellingPrice: 1225000,
      costPrice: 0.0,
      quantityInStock: 8,
      orderType: "Online",
      discountEnabled: true,
      unitPrice: 3232,
      expiryEnabled: true,
      returnPolicy: true,
      shortDescription: "Latest model with advanced features",
      longDescription:
        "The iPhone 13 Pro features a stunning display, powerful processor, and advanced camera system.",
      action: "publish",
      productImage: { name: "iphone13pro.jpg", size: 2048, type: "image/jpeg" },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "iPhone 12 Pro",
      category: "Gadgets",
      sellingPrice: 725000,
      costPrice: 0.0,
      quantityInStock: 12,
      orderType: "In-store",
      discountEnabled: true,
      unitPrice: 3232,
      expiryEnabled: true,
      returnPolicy: true,
      shortDescription: "Premium smartphone with exceptional camera",
      longDescription:
        "The iPhone 12 Pro delivers great performance and camera quality at a lower price.",
      action: "publish",
      productImage: { name: "iphone12pro.jpg", size: 2048, type: "image/jpeg" },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "Polo T-Shirt",
      category: "Fashion",
      sellingPrice: 125000,
      costPrice: 0.0,
      quantityInStock: 120,
      orderType: "In-store",
      discountEnabled: false,
      unitPrice: 3232,
      expiryEnabled: false,
      returnPolicy: true,
      shortDescription: "Comfortable and stylish",
      longDescription:
        "This Polo T-Shirt is made from high-quality materials and offers a comfortable fit.",
      action: "publish",
      productImage: { name: "polo_tshirt.jpg", size: 1024, type: "image/jpeg" },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "Polo T-Shirt",
      category: "Fashion",
      sellingPrice: 125000,
      costPrice: 0.0,
      quantityInStock: "Out of Stock",
      orderType: "In-store",
      discountEnabled: false,
      unitPrice: 3232,
      expiryEnabled: false,
      returnPolicy: true,
      shortDescription: "Comfortable and stylish",
      longDescription:
        "This Polo T-Shirt is made from high-quality materials and offers a comfortable fit.",
      action: "publish",
      productImage: { name: "polo_tshirt.jpg", size: 1024, type: "image/jpeg" },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
    {
      productName: "Polo T-Shirt",
      category: "Fashion",
      sellingPrice: 125000,
      costPrice: 0.0,
      quantityInStock: "Out of Stock",
      orderType: "In-store",
      discountEnabled: false,
      unitPrice: 3232,
      expiryEnabled: false,
      returnPolicy: true,
      shortDescription: "Comfortable and stylish",
      longDescription:
        "This Polo T-Shirt is made from high-quality materials and offers a comfortable fit.",
      action: "publish",
      productImage: { name: "polo_tshirt.jpg", size: 1024, type: "image/jpeg" },
      date: "2024-11-07",
      time: "12:00 PM",
      action: "publish",
      totalValue: 25856,
      status: "Active",
    },
  ]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("productName");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [action, setAction] = useState("publish");

  useEffect(() => {
    const data = localStorage.getItem("productData");
    if (data) {
      const parsedData = JSON.parse(data);
      const newData = createProductData(parsedData);
      setProductData((prevData) => [...prevData, ...newData]);
    }
  }, []);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    console.log("handleRequestSort", orderBy, order);
  };

  const handleSelectAllClick = (event) => {
    const newSelected = event.target.checked
      ? productData.map((n) => n.id)
      : [];
    setSelected(newSelected);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    const newSelected =
      selectedIndex === -1
        ? [...selected, id]
        : selected.filter((item) => item !== id);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeAction = (e) => setAction(e.target.value);

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
            />
            <TableBody>
              {productData
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
                        checked={selected.indexOf(product.id) !== -1}
                        onChange={(event) => handleClick(event, product.id)}
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
                        value={action}
                        onChange={handleChangeAction}
                        sx={{ minWidth: 120 }}
                      >
                        <option value="publish">Publish</option>
                        <option value="unpublish">Unpublish</option>
                        <option value="delete">Delete</option>
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
