import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <div className="header-container">
        <div className="navbar">
          <div className="logo">
            <h1>
              Book<span>Worm</span>
            </h1>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/addbooks">Admin</Link>
                </li>
                <li>
                  <Link to="/checkout/:id">CheckOut</Link>
                </li>
                <li>
                  <Link to="/orders/:idOr">Orders</Link>
                </li>
                <li className="last">
                  <Link className="login" to="/login">
                    Login
                  </Link>
                </li>
                <li style={{ color: "red", fontWeight: "bold" }}>
                  {loggedInUser.name}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
