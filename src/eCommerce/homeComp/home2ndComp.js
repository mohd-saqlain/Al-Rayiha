import { React, useState, useEffect } from "react";
import "./comp2.css";
import { attar, category } from "./API1stComp";

const getLocalData = () => {
  const dataJson = localStorage.getItem("cartItems");
  if (dataJson) {
    return JSON.parse(dataJson);
  } else {
    return [];
  }
};

const Comp2 = () => {
  const [getData, setData] = useState(getLocalData());
  // const [getData2, setData2] = useState();

  function addCart(image, name, price) {
    const newData = {
      image: image,
      name: name,
      price: price,
    };

    setData([...getData, newData]);
  }
  localStorage.setItem("cartItems", JSON.stringify(getData));

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
                    {/* style={{ width: "18rem" }} */}
                      <div className="card" >
                        <img src={image} alt="img" className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title text-center">{name}</h5>
                          <div className="btn-tag">
                            <button className="price btn btn-info btn-sm">
                              ₹{price}
                            </button>
                            <a
                              className=" btn btn-primary cart-btn"
                              onClick={() => addCart(image, name, price)}
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
