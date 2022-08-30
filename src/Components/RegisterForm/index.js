import Input from "../Shared/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateFormRegister } from "../../helper";
import Button from "../Shared/Button/Button";
import { registerAsyncAction } from "../../store/user/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formState, setFormState] = useState({
    nickname: {
      value: "",
      error: "",
      isTouched: false,
    },
    username: {
      value: "",
      error: "",
      isTouched: false,
    },
    email: {
      value: "",
      error: "",
      isTouched: false,
    },
    password: { value: "", error: "", isTouched: false },
  });

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value.trim();
    const error = validateFormRegister({
      value,
      name,
    });
    setFormState({
      ...formState,
      [name]: {
        value,
        error: error,
        isTouched: true,
      },
    });
    setIsFormDirty(true);
  }

  function checkIsFormValid() {
    const newFormData = {};
    Object.keys(formState).forEach((key) => {
      const formValue = formState[key];
      if (formValue.isTouched === false) {
        newFormData[key] = {
          value: "",
          isTouched: true,
          error: validateFormRegister({ value: "", name: key }),
        };
      } else {
        newFormData[key] = formState[key];
      }
    });
    setFormState(newFormData);

    Object.keys(formState).forEach((key) => {
      if (formState[key].error) {
        return false;
      }
    });
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = checkIsFormValid();
    if (!isValid) {
      return;
    }
    setIsLoading(true);
    setFormError("");

    const regisAsyncAction = registerAsyncAction({
      nickname: formState.nickname.value,
      username: formState.username.value,
      password: formState.password.value,
      email: formState.email.value,
    });

    dispatch(regisAsyncAction).then((res) => {
      if (!res.ok) {
        setFormError(res.error);
      }
      setIsLoading(false);
      navigate("/");
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
                  onChange={handleOnChange}
                  type="text"
                  error={formState.nickname.error}
                  name="nickname"
                  label="Nick name"
                  placeholder="Enter your nickname"
                />
                <Input
                  onChange={handleOnChange}
                  error={formState.username.error}
                  type="text"
                  label="Username"
                  name="username"
                  placeholder="Enter Username"
                />
                <Input
                  onChange={handleOnChange}
                  error={formState.email.error}
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Enter your password"
                />
                <Input
                  onChange={handleOnChange}
                  error={formState.password.error}
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Confirm your password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button
                    isLoading={isLoading}
                    className="btn btn-primary btn-size-large"
                  >
                    Submit
                  </Button>
                  <Link to="">Back</Link>
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
export default RegisterForm;
