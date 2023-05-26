interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
  employee_anual_salary: number;
}

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <tr className="row-employee align-middle" key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.employee_name}</td>
      <td>{employee.employee_salary}</td>
      <td>{employee.employee_anual_salary}</td>
      <td>{employee.employee_age}</td>
      <td>
        <img src={employee.profile_image} className="profile-img" alt="" />
      </td>
    </tr>
  );
}
