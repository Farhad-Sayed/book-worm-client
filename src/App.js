// import logo from './logo.svg';
import "./App.css";
import AddBooks from "./Components/AddBooks/AddBooks";
import CheckOut from "./Components/CheckOut/CheckOut";
import Header from "./Components/Header/Header";
import LogIn from "./Components/LogIn/LogIn";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import Orders from "./Components/Orders/Orders";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageBooks from "./Components/ManageBooks/ManageBooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ });
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/addbooks">
            <AddBooks></AddBooks>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orders/:id">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/manage">
            <ManageBooks></ManageBooks>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
