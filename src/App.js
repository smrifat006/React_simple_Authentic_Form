import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import login from "./component/images/login.png";
import React, { useState } from "react";
import swal from "sweetalert";

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    if (user == "smrifat006@gmail.com" && pass == 123456)
      swal("Succesful Login", "Welcome Rifat", "success");
    else {
      swal("Wrong Data", "Chek your Data again", "failed");
    }
  };

  return (
    <div className="App">
      <h2>Authentication Portal</h2>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <img className="float-right" src={login} width="400" />
        </div>
        <div className="col-md-6 my-auto bg-dark p-5 rounded">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                value={user}
                className="form-control"
                placeholder="Enter Your Mail"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={pass}
                class="form-control"
                placeholder="Enter Your Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
