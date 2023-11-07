import * as React from "react";
import Paperbase from "../Paperbase";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material";
const sample = [
  [202214, "Jubaer Ahmad Khan", 49, "2019-2020", 3],
  [202200, "Taufiq Islam", 49, "2019-2020", 1],
  [344453, "Ab Palash", 48, "2018-2019", 3],
  [439363, "Al Imran", 47, "2017-2018", 5],
  [334356, "Hasan Al Mamun", 49, "2019-2020", 2],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns = [
  {
    width: 100,
    label: "Student ID",
    dataKey: "dessert",
  },
  {
    width: 120,
    label: "Student Name",
    dataKey: "calories",
  },
  {
    width: 100,
    label: "Student Batch",
    dataKey: "fat",
  },
  {
    width: 120,
    label: "Student Session",
    dataKey: "carbs",
  },
  {
    width: 120,
    label: "Issued Book",
    dataKey: "protein",
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

function ReactVirtualizedTable() {
  return (
    <Box sx={{ padding: 2, margin: 2 }}>
      <Paper style={{ height: 450, width: "100%" }}>
        <TableVirtuoso
          data={rows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 5,
            mb: 2,
            width: "150px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Find Student
        </Button>
      </div>
    </Box>
  );
}

function StudentDetails() {
  return (
    <div>
      <Paperbase componentProp={<ReactVirtualizedTable />} />
    </div>
  );
}
export default StudentDetails;
