import { Header } from "../components/Header";
import { EmployeesPage } from "./EmployeesPage";

export function HomePage() {
  return <div className="container-fluid bg-dark min-vh-100">
    <Header />
    <EmployeesPage />
  </div>
}