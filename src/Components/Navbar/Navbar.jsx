import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import menubar from "../Assets/menu.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  // Reset menuVisible when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280 && menuVisible) {
        setMenuVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuVisible]);
  return (
    <header>
      {/* Navigation Header part for Smaller Screens View  */}
      <div className="navbar-mobile">
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <img src={logo} alt="Logo" />
          <p>SHOPPER</p>
        </Link>
        <div className="nav-menubar">
          <Link style={{ textDecoration: "none" }} to="/cart">
            <img src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <img
            src={menubar}
            alt="menu"
            className="menu-icon"
            onClick={() => setMenuVisible(!menuVisible)}
          />
        </div>
      </div>

      {/* Display menu items when menuVisible is true */}
      {menuVisible && (
        <div className="navbar-menu-expanded">
          <ul className="nav-menu-expended">
            <li onClick={() => setMenu("shop")}>
              <Link style={{ textDecoration: "none" }} to="/">
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("men")}>
              <Link style={{ textDecoration: "none" }} to="/men">
                Men
              </Link>
              {menu === "men" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("women")}>
              <Link style={{ textDecoration: "none" }} to="/women">
                Women
              </Link>
              {menu === "women" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link style={{ textDecoration: "none" }} to="/kids">
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="nav-login-cart-expended">
            {isAuthenticated ? (
              <div className="nav-login-cart-expended-btn">
                <span>Welcome, {user.name}</span>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <button>Login</button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/*  Navigation Header part for Desktop View */}
      <div className="navbar">
        <Link to="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </Link>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/men">
              Men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/women">
              Women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="kids">
              Kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          {isAuthenticated ? (
            <div className="nav-login-cart-btn">
              <span>Welcome, {user.name}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <button>Login</button>
            </Link>
          )}

          <Link style={{ textDecoration: "none" }} to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
