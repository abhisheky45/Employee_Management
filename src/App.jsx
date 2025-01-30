import React, { createContext, useState } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./component/AddEmp";
import ViewEmp from "./component/ViewEmp";
import ListEmp from "./component/ListEmp";
import "./App.css";

const listContext = createContext();

const App = () => {
  const [employeeList, setEmployeList] = useState([]);

  return (
    <>
      <listContext.Provider value={{ employeeList, setEmployeList }}>
        <Router>
          <Routes>
            <Route path="/" element={<ListEmp />}></Route>
            <Route path="/add" element={<AddEmp />}></Route>
            <Route path="/view/:id" element={<ViewEmp />}></Route>
          </Routes>
        </Router>
      </listContext.Provider>
    </>
  );
};

export {listContext}

export default App;
