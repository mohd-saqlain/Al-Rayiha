import React from "react";
import "./comp1.css";
import comp1Data from "./API1stComp";

const Comp1 = () => {
  return (
    <div className="img-main">
      {comp1Data.map((curEle) => {
        const { id, image1, image2 } = curEle;
        return (
          <div className="img-div" key={id}>
            <figure><img src={image1} alt="image1" /></figure>
           <figure> <img src={image2} alt="image2" /></figure>
          </div>
        );
      })}
    </div>
  );
};

export default Comp1;
