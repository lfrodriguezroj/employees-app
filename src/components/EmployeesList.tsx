import { useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../api/employees.api";
import { setEmployees } from "../redux/employeeSlice";
import { AxiosError } from "axios";
import Swal from "sweetalert2";

export function EmployeesList() {
  const employees: any = useSelector((state: any) => state.employees.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadEmployees() {
      try {
        const res = await getAllEmployees();
        dispatch(setEmployees(res.data));
      } catch (error) {
        const err = error as AxiosError
        if (err.response?.status === 429) {
          Swal.fire({
            title: 'Error!',
            text: 'Too many request, try later.',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      }
    }
    loadEmployees();
  }, [dispatch]);
  
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Anual Salary</th>
          <th>Age</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee: any) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}
