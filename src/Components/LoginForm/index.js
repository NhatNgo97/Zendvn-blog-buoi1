import Input from "../Shared/Input";
import "./loginForm.css";

function LoginForm() {
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
                  label="Username"
                  placeholder="Enter Username"
                />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <button className="btn btn-primary btn-size-large">
                    Submit
                  </button>
                  <a href="register.html">Regiter</a>
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
