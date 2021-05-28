import React, { useEffect } from "react";
import { auth } from "./Component/Firebase";
import { useStateValue } from "./Component/StateProvider";
import "./App.css";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Component/Header";
function App() {
const [{ user }, dispatch] = useStateValue();

useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
return (
  <div className="app">
    <Router>
      <Switch>
<Route path="/login">
  <Login />
</Route>
        <Route path="/">
          <Header/><Home/>
        </Route>
      </Switch>
    </Router>
  </div>
);
}

export default App;