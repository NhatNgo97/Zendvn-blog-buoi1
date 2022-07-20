import RegisterForm from "../../Components/RegisterForm";
import useNotAuthenticated from "../../hooks/useNotAuthenticated";

function RegisterPage() {
  useNotAuthenticated();
  return <RegisterForm />;
}

export default RegisterPage;
