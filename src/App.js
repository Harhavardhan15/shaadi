import "./styles.css";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login.js";
import Contact from "./Contact.js";
import { useHistory } from "react-router-dom";
import Shaadi from "./Shaadi";

export default function App() {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("shaadi")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={Login} />

        <Fragment>
          <section className="container">
            <Switch>
              {auth && <Route exact path="/contact" component={Contact} />}
              <Route exact path="/shaadi" component={Shaadi} />

              <Route exact path="/login" component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Fragment>
  );
}
