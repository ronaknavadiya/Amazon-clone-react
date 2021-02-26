import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useGlobalContext } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ILizXA0XN5L2vwEaOFMkj7zlb3Q9BkTqjbW6Sci9tBeY0cR472tnXfKQEZC843waTkbWg02jh3lVdUvF6gHB9jt00cFeA7faE"
);

function App() {
  const { updateUser } = useGlobalContext();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER:", authUser);
      if (authUser) {
        // user justed logged in or the user was already logged in
        updateUser(authUser);
      } else {
        // use log out
        updateUser(null);
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/orders" exact>
            <Header />
            <h1>orders</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
