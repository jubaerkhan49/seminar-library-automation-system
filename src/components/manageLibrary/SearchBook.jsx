import * as React from "react";
import Paperbase from "../Paperbase";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";
function FreeSolo() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [status, setStatus] = useState("");
  const [bookStatus, setBookStatus] = useState("");
  const handleSearch = () => {
    const foundBook = bookList.find((book) => book.title === searchText);

    if (foundBook) {
      setSearchResult(foundBook.title);
      setStatus("success");
      setBookStatus("The book is Available");
    } else {
      setSearchResult(null);
      setStatus("error");
      setBookStatus("The book is not Available");
    }
  };
  return (
    <Stack
      spacing={2}
      sx={{
        width: 500,
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={bookList.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Book"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        onInputChange={(event, newInputValue) => {
          setSearchText(newInputValue);
        }}
        onChange={() => handleSearch()}
      />
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity={status}>
        {bookStatus}
      </Alert>
      </Stack>
    </Stack>
  );
}
function SearchBook() {
  return (
    <div>
      <Paperbase componentProp={<FreeSolo />} />
    </div>
  );
}
export default SearchBook;
const bookList = [
  { title: "Operating Systems", year: 1994 },
  { title: "Computer Graphics", year: 1972 },
  { title: "Economics", year: 1974 },
  { title: "Digital Logic Design", year: 1974 },
  { title: "Web Programming", year: 1974 },
  { title: "Learn JavaScript with real World Application", year: 1974 },
];
