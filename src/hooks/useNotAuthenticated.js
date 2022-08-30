import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function useNotAuthenticated() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => Boolean(state.User.token));

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
}
