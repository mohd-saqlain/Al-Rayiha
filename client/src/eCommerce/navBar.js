import { useEffect, useMemo } from "react";
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

const NavBar = ({cartLen}) => {
  const [cartDis, setCartDis] = useState(true);
  const [items, setItems] = useState(cartData());
  const [openMenu, setOpenMenu] = useState(true);
  

  useEffect(() => {
    setItems(cartData());
  }, [cartDis]);

  
  
  const removeCartItem = (ind) => {
    if (items) {
      const newItems = items.filter((curEle, inde) => {
        if (inde != ind) {
          return curEle;
        }
      });
      setItems(newItems);
    
      localStorage.clear("cartItems");
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  };
 


  return (
    <>
      <header>
        <div className={cartDis ? "head-div" : "head-div action2"}>
          <div className="free-delivery">
            <span>Free delivery on all orders.</span>
          </div>
          <nav className={openMenu ? "nav-items" : "nav-items action"}>
            <div className="menu-open">
              <i
                class="fa-solid fa-bars"
                onClick={() => setOpenMenu(false)}
              ></i>
            </div>
            <div className="logo">
              <i>Al-Rayiha</i>
            </div>
            <ul>
              <div className="close-menu">
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setOpenMenu(true)}
                ></i>
              </div>
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
              {/* <a href="#"> */}
              <i
                className="fa-solid fa-bag-shopping"
                onClick={() => setCartDis(false)}
                style={{cursor:'pointer'}}
              > <span className="cart-total">{cartLen}</span></i>
              {/* </a> */}
            </div>
            <div className="cart-main-div">
              <div className="cart-div">
                <div className="cart-head">
                  <span>CART</span>
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => setCartDis(true)}
                    
                  ></i>
                </div>
                {items.map((curEle, ind) => {
                  const { image, name, price } = curEle;
                  return (
                    <div className="s-item">
                      <figure className="cart-img">
                        <img src={image} alt="CartImage" />
                      </figure>
                      <div className="cart-discr">
                        <p>{name}</p>
                        <span id="remove" onClick={() => removeCartItem(ind)}>
                          Remove
                        </span>
                        <span id="price">₹ {price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h2></h2>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
