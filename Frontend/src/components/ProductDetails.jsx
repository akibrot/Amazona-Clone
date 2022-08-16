import React, { useState } from "react";
import "./ProductDetails.scss";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_Price,
  Add_To_Cart,
  Remove_From_Cart,
  REMOVE_Price,
} from "./redux/actions/actions";

function ProductDetails(props) {
  const cartitems = useSelector((state) => state.CartReducer);

  const dispatch = useDispatch();
  const data = props.location.state.prod;
  const rating = data.rating;
  const history = props.history;
  const back = () => {
    history.push("/");
  };
  localStorage.setItem("textdisp", "Add to cart");

  const [addtotext, setaddtotext] = useState("Add to cart");
  const [quantity, setquantity] = useState(1);
  const intialp = data.price;
  const [price, setprice] = useState(intialp);
  const decrementquantity = () => {
    if (quantity <= data.countInStock) {
      if (quantity === 1) {
        setprice(intialp);
      } else setquantity(quantity - 1);
      var i;
      for (i = 0; i < quantity; i++) {
        if (quantity === 1) {
          return;
        } else setprice(price - intialp);
      }
    }
  };
  const incrementquantity = () => {
    var i;
    if (quantity < data.countInStock) {
      setquantity(quantity + 1);
      for (i = 0; i < quantity; i++) {
        setprice(price + intialp);
      }
    }
  };
  const addtocart = () => {
    const id = data._id;
    const sellerid = 1234;
    const name = data.name;
    const image = data.image;
    const tocart = {
      id,
      name,
      image,
      price,
      sellerid,
      quantity,
    };

    const findval = cartitems.find((items) => items.id === id);
    if (findval) {
     
      dispatch(Remove_From_Cart(id));
      
      dispatch(REMOVE_Price(price));
      dispatch(Add_To_Cart(tocart));
      dispatch(ADD_Price(price));
    } else {
      if (addtotext === "Add to cart") {
        dispatch(Add_To_Cart(tocart));
        dispatch(ADD_Price(price));
        setaddtotext("Already in");
      } else {
        return;
      }
    }
  };
  return (
    <div className="detailcont">
      <div className="image">
        <FaArrowLeft className="backicon" onClick={back} />
        <img src={data.image} alt="" />
      </div>
      <div className="disc">
        <div className="disccont">
          <h5>Name</h5> <p>{data.name}</p>
          <h5>Category</h5>
          <p>{data.category}</p>
          <h5>Brand</h5>
          <p>{data.brand}</p>
          <h5>Price</h5>
          <p>${data.price}</p>
          <h5>Description</h5>
          <p>{data.description}</p>
          <div className="ratings">
            <span>
              {rating > 1 ? <FaStar /> : <FaStar style={{ color: "grey" }} />}
            </span>
            <span>
              {rating >= 2 ? <FaStar /> : <FaStar style={{ color: "grey" }} />}
            </span>
            <span>
              {rating >= 3 ? <FaStar /> : <FaStar style={{ color: "grey" }} />}
            </span>
            <span>
              {rating >= 4 ? <FaStar /> : <FaStar style={{ color: "grey" }} />}
            </span>
            <span>
              {rating >= 5 ? <FaStar /> : <FaStar style={{ color: "grey" }} />}
            </span>
            <span className="rv">{data.numReviews}reviews</span>
          </div>
        </div>
      </div>
      <div className="addtocartcont">
        <div className="addcont">
          <h5>Seller</h5> <p>{data.name}</p>
          <h5>Price</h5> <p>${price}</p>
          <h5>Status</h5>{" "}
          <p>
            {data.countInStock > 0 ? (
              <p className="instock">In Stock={data.countInStock}</p>
            ) : (
              <p className="notin">Not avalible</p>
            )}
          </p>
          <div className="quantity">
            <div className="left" onClick={incrementquantity}>
              +
            </div>
            <div className="center">
              {data.countInStock > 0 ? quantity : "0"}
            </div>
            <div className="right" onClick={decrementquantity}>
              -
            </div>
          </div>
          <div className="button" onClick={addtocart}>
            {addtotext}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
