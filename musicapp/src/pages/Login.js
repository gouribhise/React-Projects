import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MusicContext from "../context/MusicContext";
const Login = () => {
  const navigate = useNavigate();
  const { getData } = useContext(MusicContext);

  const navigateToDashboard = () => {
    //navigate("dashboard");
    getData();
    navigate("dashboard");
  };
  const handleSubmit = () => {
    console.log("handlesubmit");
  };
  return (
    <>
      <div className="row">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Musica
            </a>
          </div>
        </nav>
      </div>
      <div className="row login py-5">
        <div className="col-lg-6 login-opt mx-auto">
          Log in to Musica
          <p>Continue with google</p>
          <p>Continue with facebook</p>
          <p>Continue with apple</p>
          <p>Continue with phone number</p>
          <form action={handleSubmit}>
            <label>Email:</label>
            <br />
            <input type="text" name="username" />
            <br />
            <label>Password</label>
            <br />
            <input type="text" name="username" />
            <br />
            <input
              type="submit"
              value="Login"
              onClick={() => navigateToDashboard()}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
