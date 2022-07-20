import Input from "../Shared/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterForm() {
  const [formState, setFormState] = useState({
    nickname: {
      value: "",
      error: "",
    },
    username: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    cPassword: { value: "", error: "" },
  });
  return (
    <main className="login">
      <div className="spacing"></div>
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form action="">
                <Input
                  type="text"
                  label="Nick name"
                  placeholder="Enter your nickname"
                />
                <Input
                  type="text"
                  label="Username"
                  placeholder="Enter Username"
                />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">
                    Register
                  </button>
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
