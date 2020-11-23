import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../providers/GlobalProvider.jsx";
import { auth } from "../libs/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(GlobalContext);

  const loginWithEmailPassword = async () => {
    const result = await auth().signInWithEmailAndPassword(email, password);
    if (result) {
      dispatch("loggedin");
    }
  };

  return (
    <div className="container-login100">
      <pre>{state}</pre>
      <div className="wrap-login100 p-t-50 p-b-90">
        <div className="login100-form validate-form flex-sb flex-w">
          <span className="login100-form-title p-b-51">Login</span>

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
              <Link to="/register" className="txt1">
                Register
              </Link>
            </div>
          </div>

          <div className="container-login100-form-btn m-t-17">
            <button
              className="login100-form-btn"
              onClick={loginWithEmailPassword}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
