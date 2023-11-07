import * as React from "react";
import Paperbase from "../Paperbase";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';
import { useState } from "react";
import {Stack} from "@mui/material";
import {Alert} from "@mui/material";
function AddressForm() {
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  function handleClick() {
    setContent("The book is successfully Issued");
    setStatus("success");
  }
  return (
    <Box sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Issue Book to Student
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Student Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Student ID"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Student Session"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Book Name"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Book ID"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Book Edition"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="ISBN"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
          sx={{ mt: 5, mb: 2, width: "150px", textAlign: "center", fontWeight: 'bold'}}
        >
          Issue it
        </Button>
      </div>
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity={status}>
        {content}
      </Alert>
      </Stack>
    </Box>
  );
}
function IssueBook() {
  return (
    <div>
      <Paperbase componentProp={<AddressForm />} />
    </div>
  );
}
export default IssueBook;
