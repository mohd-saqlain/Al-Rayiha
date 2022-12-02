import { React, useState } from "react";
import "./comp2.css";
import { attar, category } from "./API1stComp";

const Comp2 = () => {
  const [getData, setData] = useState([]);
  function addCart(name, price) {
    setData([...getData,{ name: name, price: price }]);
    localStorage.setItem("cartItems", JSON.stringify(getData));
  }

  return (
    <>
      {category.map((curElem) => {
        const { id, imageFull, cartItems } = curElem;
        return (
          <div className="card-main" key={id}>
            <div className="full-img">
              <img src={imageFull} alt="img" />
            </div>
            <div className="card-div">
              {cartItems.map((curEle) => {
                const { image, name, price } = curEle;
                return (
                  <>
                    <div className="my-card">
                      <div className="card" style={{ width: "18rem" }}>
                        <img src={image} alt="img" className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title text-center">{name}</h5>
                          <div className="btn-tag">
                            <button className="price btn btn-info btn-sm">
                              ₹{price}
                            </button>
                            <a
                              className=" btn btn-primary cart-btn"
                              onClick={() => addCart(name, price)}
                            >
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comp2;
