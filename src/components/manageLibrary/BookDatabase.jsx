import * as React from "react";
import Paperbase from "../Paperbase";
import BookTable from "./BookTable";
function BookDatabase() {
  const setActive = true;
  return (
    <div>
      <Paperbase componentProp={<BookTable />} />
    </div>
  );
}
export default BookDatabase;
