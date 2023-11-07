import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import Dashboard from "./components/Dashboard";
import BookDatabase from './components/manageLibrary/BookDatabase';
import BookRequest from './components/manageLibrary/BookRequest';
import IssueBook from './components/manageLibrary/IssueBook';
import SearchBook from './components/manageLibrary/SearchBook';
import StudentDetails from './components/manageLibrary/StudentDetails';
import StudentReport from './components/manageLibrary/StudentReport';
import SignUpFaculty from "./components/SignUpFaculty";
function App() {
  return (
    <div>
      <SignIn />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/bookdatabase" element={<BookDatabase />} />
        <Route path="/dashboard/bookrequest" element={<BookRequest />} />
        <Route path="/dashboard/issuebook" element={<IssueBook/>}/>
        <Route path="/dashboard/searchbook" element={<SearchBook />} />
        <Route path="/dashboard/studentdetails" element={<StudentDetails />} />
        <Route path="/dashboard/studentreport" element={<StudentReport/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signupfaculty" element={<SignUpFaculty/>}/>
      </Routes>
    </div>
  );
}

export default App;
