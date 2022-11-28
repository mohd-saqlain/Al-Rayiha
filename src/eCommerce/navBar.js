import React from "react";
import "./navBar.css";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="head-div">
        <div className="free-delivery">
          <span>Free delivery on all orders.</span>
        </div><nav className="nav-items">
          <div className="logo">
            <i>Al-Rayiha</i>
          </div>
          <ul>
            <li>
              <a href="#">Attar</a>
            </li>
            <li>
              <a href="#">Luxury Attar</a>
            </li>
            <li>
              <a href="#">Body Spray</a>
            </li>
            <li>
              <a href="#">Bakhoor</a>
            </li>
            <li>
              <a href="#">Essential Oil</a>
            </li>
            <li>
              <a href="#">Return Your Order</a>
            </li>
          </ul>
          <div className="cart">
            <a href="#">
              <i class="fa-solid fa-bag-shopping"></i>
            </a>
          </div>
        </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
