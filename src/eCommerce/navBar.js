import { React, useState } from "react";
import "./navBar.css";

const cartData = () => {
  const cartJsonData = localStorage.getItem("cartItems");
  if (cartJsonData) {
    return JSON.parse(cartJsonData);
  } else {
    return [];
  }
};

const NavBar = () => {
  const [cartDis, setCartDis] = useState(0);
  const [items, setItems] = useState(cartData());
  const setDis = () => {
    setCartDis(1);
    setItems(cartData);
  };
  return (
    <>
      <div
        className="cart-main-div"
        style={{ display: cartDis ? "block" : "none" }}
      >
        {cartDis
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto")}

        <div className="cart-div">
          <div className="cart-head">
            <span>CART</span>
            <i className="fa-solid fa-xmark" onClick={() => setCartDis(0)}></i>
          </div>
          {items.map((curEle) => {
            return (
              <div className="s-item">
                <p>{curEle.name}</p>
                <p>{curEle.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <header>
        <div className="head-div">
          <div className="free-delivery">
            <span>Free delivery on all orders.</span>
          </div>
          <nav className="nav-items">
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
                <i
                  className="fa-solid fa-bag-shopping"
                  onClick={() => setDis()}
                ></i>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
