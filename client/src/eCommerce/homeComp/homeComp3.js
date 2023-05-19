import "./comp3.css";

const Comp3 = () => {
  return (
    <>
    <div className="service">
      <div className="ship-panel">
        <div className="icon-div">
        <i className="fa-solid fa-truck-ramp-box"></i>
        <p className="main-heading">FREE SHIPING</p>
        <p className="sub-heading">Free delivery pan India on all orders.</p>
        
        </div>
        <div className="icon-div">
          <i className="fa-solid fa-sack-dollar"></i>
          <p className="main-heading">CASH ON DELIVERY</p>
          <p className="sub-heading">100% Risk Free & Secured Shopping.</p>
        </div>
        <div className="icon-div">
          <i className="fa-solid fa-truck"></i>
          <p className="main-heading">EASY RETURN</p>
          <p className="sub-heading">Return product within 7 days of purchase</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Comp3;
