import { useState } from 'react';
import Logo from '../assets/logo.png';
import { getAllEmployees, getEmployee } from '../api/employees.api';
import { useDispatch } from 'react-redux';
import { setEmployees } from '../redux/employeeSlice';
import { AxiosError } from 'axios';
import Swal from 'sweetalert2';

export function Header() {
  const [input, setInput] = useState<number | ''>('');
  const dispatch = useDispatch();

  const fetchEmployees = async () => {
    try {
      const res = await getAllEmployees();
      dispatch(setEmployees(res.data));
    } catch (error) {
      const err = error as AxiosError
      if (err.response?.status === 404) {
        Swal.fire({
          title: 'Error!',
          text: 'Too many request, try later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }
  };

  const fetchEmployee = async () => {
    try {
      const res = await getEmployee(Number(input));
      dispatch(setEmployees([res.data]));
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
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input === '' || input === 0) {
      fetchEmployees();
    } else {
      fetchEmployee();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    if (isNaN(Number(event.target.value)) || !Number(event.target.value)) {
      setInput(0)
    } else {
      setInput(Number(event.target.value))
    }
  };

  return (
    <div className="container mt-3 bg-dark">
        <nav className="navbar navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">
                <img src={Logo} alt="Logo" height="50" className="d-inline-block align-text-center pe-3" />
                Employees
            </a>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" placeholder="Search" onChange={(e) => handleChange(e)} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </div>
  )
}