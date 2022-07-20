import Input from "../Shared/Input";
import "./loginForm.css";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";
import { useState } from "react";
import { validateFormData } from "../../helper";
import { useDispatch } from "react-redux";
import { loginAsyncAction } from "../../store/user/actions";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value.trim();
    const error = validateFormData({ value, name });
    setFormState({
      ...formState,
      [name]: {
        value,
        error: error,
      },
    });
    setIsFormDirty(true);
  }

  function checkFormIsValid() {
    if (!isFormDirty) {
      setFormState({
        username: {
          value: "",
          error: validateFormData({
            value: "",
            name: "username",
          }),
        },
        password: {
          value: "",
          error: validateFormData({
            value: "",
            name: "password",
          }),
        },
      });
      return false;
    }
    if (formState.username.error || formState.username.error) {
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    setFormError("");
    if (isLoading) {
      return;
    }
    event.preventDefault();
    const isValid = checkFormIsValid();
    if (!isValid) {
      console.log("Form Error");
      return;
    }
    setIsLoading(true);

    dispatch(
      loginAsyncAction({
        username: formState.username.value,
        password: formState.password.value,
      })
    ).then((res) => {
      if (res.ok) {
        navigate("/");
      } else {
        setFormError(res.error);
        setIsLoading(false);
      }
    });
  }
  return (
    <main className="login">
      <div className="spacing"></div>
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <p className="form-login__error">{formError}</p>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  label="Username"
                  placeholder="Enter Username"
                  value={formState.username.value}
                  error={formState.username.error}
                  name="username"
                  onChange={handleOnChange}
                />
                <Input
                  type="password"
                  label="Password"
                  value={formState.password.value}
                  error={formState.password.error}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleOnChange}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button isLoading={isLoading} type="primary" size="large">
                    Submit
                  </Button>
                  <Link to="/register">Regiter</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
    </main>
  );
}

export default LoginForm;
