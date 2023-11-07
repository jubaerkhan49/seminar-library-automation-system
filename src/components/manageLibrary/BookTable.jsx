import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const columns = [
  { field: "id", headerName: "ID", width: 180 },
  { field: "firstName", headerName: "Book Name", width: 180 },
  { field: "lastName", headerName: "Book Writer", width: 180 },
  {
    field: "age",
    headerName: "Edition",
    width: 180,
  },
  {
    field: "fullName",
    headerName: "ISBN Number",
    width: 240,
  },
  {
    field: "status",
    headerName: "Available Status",
    width: 180,
  },
];

const rows = [
  {
    id: 1,
    lastName: "YDF",
    firstName: "Operating Systems",
    age: "2nd Edition",
    fullName: "123-344-3534",
    status: "Available",
  },
  {
    id: 2,
    lastName: "JDK",
    firstName: "Computer Graphics",
    age: "4th Edition",
    fullName: "123-344-3534",
    status: "Not Available",
  },
  {
    id: 3,
    lastName: "HDF",
    firstName: "Web Programming",
    age: "1st Edition",
    fullName: "123-344-3534",
    status: "Available",
  },
  {
    id: 4,
    lastName: "ABC",
    firstName: "Computational Geometry",
    age: "3rd Edition",
    fullName: "123-344-3534",
    status: "Not Available",
  },
  {
    id: 5,
    lastName: "DFD",
    firstName: "Economics",
    age: "4th Edition",
    fullName: "345-34535-343",
    status: "Available",
  },
];
export default function DataTable() {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
            id="outlined-helperText"
            label="ID"
          />
          <TextField
            id="outlined-helperText"
            label="Book Name"
          />
          <TextField
            id="outlined-helperText"
            label="Book Writer"
          />
          <TextField
            id="outlined-helperText"
            label="Edition"
          />
          <TextField
            id="outlined-helperText"
            label="ISBN Number"
          />
          <TextField
            id="outlined-helperText"
            label="Available Status"
          />
        </div>
      </Box>

      <div style={{ display: "flex", justifyContent: "center"}}>
        <Button variant="contained" disableElevation sx={{ mt: 3, mb: 5, width: 200 }}>
          Add Book
        </Button>
      </div>
    </>
  );
}
