import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../libs/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerWithEmailPassword = async () => {
    await auth().createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container-login100">
      <div className="wrap-login100 p-t-50 p-b-90">
        <div className="login100-form validate-form flex-sb flex-w">
          <span className="login100-form-title p-b-51">Register</span>

          <div
            className="wrap-input100 validate-input m-b-16"
            data-validate="Username is required"
          >
            <input
              className="input100"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div
            className="wrap-input100 validate-input m-b-16"
            data-validate="Password is required"
          >
            <input
              className="input100"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input100"></span>
          </div>

          <div className="flex-sb-m w-full p-t-3 p-b-24">
            <div>
              <Link to="/login" className="txt1">
                Back to Login
              </Link>
            </div>
          </div>

          <div className="container-login100-form-btn m-t-17">
            <button
              className="login100-form-btn"
              onClick={registerWithEmailPassword}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
