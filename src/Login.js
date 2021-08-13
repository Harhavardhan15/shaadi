import React, { useState } from "react";
import { render } from "react-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const username = "foo";
  const pass = "bar";
  const [login, setLogin] = useState({
    user: "",
    password: ""
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.user === username && login.password === pass) {
      setIsAuthenticated(true);
      localStorage.setItem("shaadi", username + pass);
      console.log(localStorage.getItem("shaadi"));
      history.push("/contact");
    } else {
      alert("Login Failed use UserId: foo, Password:bar");
      localStorage.removeItem("shaadi");
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="user"
          value={login.user}
          placeholder="Username = foo"
        />

        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="password"
          value={login.password}
          placeholder="Password = bar"
        />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
