import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product({ prod }) {
  
  return (
    <div className="box">
      <div className="top">
        <Link to={{ pathname: `/productdetails/${prod._id}`, state: { prod } }}>
          <img src={prod.image} alt="" />{" "}
        </Link>
      </div>

      <div className="bottom">
        <div className="button">
          <h4>Buy</h4>
          <FaMoneyBill className="icons" />
        </div>
        <div className="dsc">
          <div className="dsc1">
            <h4>{prod.name}</h4>
          </div>
        </div>
        <div className="price">
          <div className="btncont">
            <h4>${prod.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
