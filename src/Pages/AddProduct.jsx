import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  Switch,
  Paper,
  Typography,
  IconButton,
  Grid,
  Box,
  FormControlLabel,
  Button,
} from "@mui/material";
import SelectSmall from "../Components/SelectSmall";
import IconBreadcrumbs from "../Components/IconBreadcrumbs";
import { useTheme } from "@mui/material/styles";
import Select from "@mui/material/Select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"; // Image upload icon
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/reducer/reducer";
import UserProfile from "../Components/UserProfile";

function AddProduct() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(dayjs("2024-11-07"));
  const [time, setTime] = useState(dayjs("2024-11-07T12:00"));

  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    sellingPrice: "",
    costPrice: "",
    quantityInStock: "",
    orderType: "",
    discountEnabled: false,
    expiryEnabled: false,
    retunPolicy: false,
    shortDescription: "",
    longDescription: "",
    productImage: null,
    date: date.format("YYYY-MM-DD"),
    // set time with format am and pm
    time: time.format("hh:mm A"),
  });

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["link"],
    ],
  };

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "link",
  ];

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        productImage: {
          name: file.name,
          size: file.size,
          type: file.type,
          // Add other relevant properties if needed
        },
      }));
    }
  };

  const handleCategory = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({ ...prevData, category: event.target.value }));
  };

  const handleOderType = (event) => {
    console.log(event.target.value);
    setFormData((prevData) => ({ ...prevData, orderType: event.target.value }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // function getStyles(name, personName, theme) {
  //   // return {
  //   //   fontWeight:
  //   //     personName.indexOf(name) === -1
  //   //       ? theme.typography.fontWeightRegular
  //   //       : theme.typography.fontWeightMedium,
  //   // };
  // }

  const handelSubmit = () => {
    console.log(formData);
    dispatch(addProduct(formData));
  };

  return (
    <Box sx={{ p: 2, width: "100%", borderRadius: 2 }}>
      < UserProfile />
      <Box className="flex items-center justify-between p-2">
        <Typography>New Inventory Item</Typography>
        <div className="flex gap-2 items-center">
          <Button variant="contained" color="secondry">
            Save as Draft
          </Button>
          <Button variant="contained" color="primary" onClick={handelSubmit}>
            Save & Publish
          </Button>
        </div>
      </Box>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Left section: Form Fields and Description (75% of screen) */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {/* Product Name */}
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Product Name"
                name="productName"
                fullWidth
                value={formData.productName}
                onChange={handleInputChange}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, p: 2 }}
              />
              {/* Category Select */}
              <Select
                value={formData.category}
                onChange={handleCategory}
                fullWidth
                displayEmpty
                placeholder="Select Category"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  mt: 2,
                  p: 2,
                }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>

              {/* Cost Price and Selling Price */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <TextField
                    placeholder="Cost Price"
                    name="costPrice"
                    type="number"
                    fullWidth
                    value={formData.costPrice}
                    onChange={handleInputChange}
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                      p: 2,
                    }}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    placeholder="Selling Price"
                    name="sellingPrice"
                    type="number"
                    fullWidth
                    value={formData.sellingPrice}
                    onChange={handleInputChange}
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                      p: 2,
                    }}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Grid>
              </Grid>

              {/* Quantity in Stock */}
              <TextField
                placeholder="Quantity in Stock"
                name="quantityInStock"
                type="number"
                fullWidth
                value={formData.quantityInStock}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  p: 2,
                  mt: 2,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />

              {/* Order Type Select */}
              <Select
                value={formData.orderType}
                onChange={handleOderType}
                displayEmpty
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  border: "none",
                  p: 2,
                }}
                variant="standard"
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
              <Grid
                container
                spacing={2}
                sx={{ mt: 2 }}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs="auto">
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: "text.secondary", mr: 2 }}
                  >
                    Discount
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  {/* <FormControlLabel
                    control={<Switch checked={formData.discountEnabled} />}
                    label="Add Discount"
                    labelPlacement="start"
                  /> */}
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.discountEnabled}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            discountEnabled: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Add Discount"
                    labelPlacement="start"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                sx={{ mt: 2 }}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs="auto">
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: "text.secondary", mr: 2 }}
                  >
                    Expire Date
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.expiryEnabled}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            expiryEnabled: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Add Expiry Date"
                    labelPlacement="start"
                  />
                </Grid>
              </Grid>
            </Grid>

            {/* Short Description */}
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Short Description"
                name="shortDescription"
                fullWidth
                multiline
                rows={5}
                value={formData.shortDescription}
                onChange={handleInputChange}
                sx={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  p: 2,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, color: "text.secondary" }}
                >
                  Product Long Description
                </Typography>
                <ReactQuill
                  value={formData.longDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, longDescription: e })
                  }
                  modules={modules}
                  formats={formats}
                  placeholder="Long Description"
                  style={{
                    // minHeight: "200px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                    p: 2,
                    border: "none",
                    outline: "none",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ m: 1, color: "text.secondary" }}
                >
                  Add a long Product Discription
                </Typography>
              </Grid>

              {/* Discount and Expiry */}
              <Grid
                container
                spacing={2}
                sx={{ mt: 2 }}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item xs="auto">
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: "text.secondary", mr: 2 }}
                  >
                    Return Policy
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.retunPolicy}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            retunPolicy: e.target.checked,
                          })
                        }
                      />
                    }
                    label="Add Return Policy"
                    labelPlacement="start"
                  />
                </Grid>
              </Grid>
              {/* Date and Time Picker */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Date Added"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Time Added"
                      value={time}
                      onChange={(newValue) => setTime(newValue)}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Long Description */}
        </Grid>

        {/* Right section: Image Upload (25% of screen) */}
        <Grid item xs={12} md={3}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "300px",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <IconButton color="primary" component="label">
              <InsertPhotoIcon sx={{ fontSize: 50 }} />
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageUpload}
              />
            </IconButton>
            <Typography variant="body2" color="blue">
              Upload Image
            </Typography>
            <Typography variant="caption">File Format: jpeg, png</Typography>
            <Typography variant="caption">
              Recommended Size: 600x600 (1:1)
            </Typography>
          </Paper>
          <Typography>Additional Images</Typography>
          <Grid container xs={12}>
            <Grid xs={6} alignItems={"center"} justifyContent={"center"}>
              <IconButton color="primary" component="label">
                <InsertPhotoIcon sx={{ fontSize: 50 }} />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleImageUpload}
                />
              </IconButton>
              <Typography variant="body2" color="blue">
                Upload Image
              </Typography>
            </Grid>
            <Grid xs={6}>
              <IconButton color="primary" component="label">
                <InsertPhotoIcon sx={{ fontSize: 50 }} />
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleImageUpload}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddProduct;
