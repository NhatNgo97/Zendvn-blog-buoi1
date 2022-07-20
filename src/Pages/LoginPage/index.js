import LoginForm from "../../Components/LoginForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useNotAuthenticated from "../../hooks/useNotAuthenticated";

function LoginPage() {
  useNotAuthenticated();
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
