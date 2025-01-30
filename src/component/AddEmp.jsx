import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const AddEmp = () => {
  const { employeeList, setEmployeList } = useContext(listContext);
  const [isUpdate, setIsUpdating] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    EmployeeName: "",
    EmployeeId: "",
    Designation: "SDE3",
    Email: "",
    Education: "",
    Address: "",
    Salary: 10000, // Default as number
    JoiningDate: "",
    Performance: "normal",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: name === "Salary" ? Number(value) : value, // Convert Salary to Number
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isUpdate) {
      setEmployeList([...employeeList, formValue]);
    } else {
      const updatedList = employeeList.map((item, index) =>
        index === state?.ind ? { ...item, ...formValue } : item
      );
      setEmployeList(updatedList);
      setIsUpdating(false);
    }

    // Reset form after submission
    setFormValue({
      EmployeeName: "",
      EmployeeId: "",
      Designation: "INTERN",
      Email: "",
      Education: "",
      Address: "",
      Salary: 10000,
      JoiningDate: "",
      Performance: "normal",
    });

    navigate("/");
  };

  // Populate form for editing
  useEffect(() => {
    if (state?.data) {
      setIsUpdating(true);
      setFormValue({ ...state?.data });
    }
  }, [state?.data]);

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg p-4">
              <div className="card-header text-center bg-primary text-white">
                <h4 className="m-0">{isUpdate ? "EDIT EMPLOYEE" : "ADD EMPLOYEE"}</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">EMPLOYEE NAME</label>
                    <input
                      type="text"
                      placeholder="EMPLOYEE NAME"
                      className="form-control"
                      name="EmployeeName"
                      value={formValue.EmployeeName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">EMPLOYEE ID</label>
                    <input
                      type="number"
                      placeholder="EMPLOYEE ID"
                      className="form-control"
                      name="EmployeeId"
                      value={formValue.EmployeeId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">DESIGNATION</label>
                    <select
                      className="form-control"
                      name="Designation"
                      value={formValue.Designation}
                      onChange={handleChange}
                    >
                      <option value="INTERN">INTERN</option>
                      <option value="SDE1">SDE1</option>
                      <option value="SDE2">SDE2</option>
                      <option value="SDE3">SDE3</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">EMAIL</label>
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="form-control"
                      name="Email"
                      value={formValue.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">EDUCATION</label>
                    <input
                      type="text"
                      placeholder="EDUCATION"
                      className="form-control"
                      name="Education"
                      value={formValue.Education}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ADDRESS</label>
                    <input
                      type="text"
                      placeholder="ADDRESS"
                      className="form-control"
                      name="Address"
                      value={formValue.Address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">SALARY</label>
                    <select
                      className="form-control"
                      name="Salary"
                      value={formValue.Salary}
                      onChange={handleChange}
                    >
                      <option value={10000}>10000</option>
                      <option value={2000}>2000</option>
                      <option value={20000}>20000</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">JOINING DATE</label>
                    <input
                      type="date"
                      className="form-control"
                      name="JoiningDate"
                      value={formValue.JoiningDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary w-100" type="submit">
                      {isUpdate ? "UPDATE" : "SUBMIT"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
