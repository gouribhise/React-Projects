import React from "react";

const Login = () => {
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
          <form action={handleSubmit}>
            <label>
              User name:
              <input type="text" name="username" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
