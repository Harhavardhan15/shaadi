import React from "react";
import LazyLoad from "react-lazyload";
import { useHistory } from "react-router-dom";
import Character from "./Character";
const Contact = () => {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("shaadi");
          console.log(localStorage.getItem("shaadi"));
          history.push("/login");
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          history.push("/shaadi");
        }}
      >
        Guest
      </button>
      <Character />
      {/* <LazyLoad height={200}>Contact me here I am Logged In</LazyLoad> */}
    </div>
  );
};

export default Contact;
