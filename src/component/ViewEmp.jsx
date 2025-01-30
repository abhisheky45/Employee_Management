import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { listContext } from "../App";

const ViewEmp = () => {
  const { employeeList } = useContext(listContext);
  const [viewData, setViewData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const filtered = employeeList?.filter((_, index) => index + 1 == id);
      setViewData(filtered[0]);
    }
  }, [id]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-lg p-3">
              <div className="card-header text-center bg-primary text-white">
                <h4 className="m-0">EMPLOYEE DETAILS</h4>
              </div>
              <div className="card-body">
                {viewData ? (
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th className="text-start">NAME:</th>
                          <td>{viewData?.EmployeeName}</td>
                        </tr>
                        <tr>
                          <th className="text-start">ID:</th>
                          <td>{viewData?.EmployeeId}</td>
                        </tr>
                        <tr>
                          <th className="text-start">EMAIL:</th>
                          <td>{viewData?.Email}</td>
                        </tr>
                        <tr>
                          <th className="text-start">DESIGNATION:</th>
                          <td>{viewData?.Designation}</td>
                        </tr>
                        <tr>
                          <th className="text-start">EDUCATION:</th>
                          <td>{viewData?.Education}</td>
                        </tr>
                        <tr>
                          <th className="text-start">ADDRESS:</th>
                          <td>{viewData?.Address}</td>
                        </tr>
                        <tr>
                          <th className="text-start">SALARY:</th>
                          <td>{viewData?.Salary}</td>
                        </tr>
                        <tr>
                          <th className="text-start">JOINING DATE:</th>
                          <td>{viewData?.JoiningDate}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-center text-danger">No Employee Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
