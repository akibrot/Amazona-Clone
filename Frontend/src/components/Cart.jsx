import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import {
  Add_To_Cart,
  Remove_From_Cart,
  REMOVE_Price,
} from "./redux/actions/actions";
import SingleCart from "./SingleCart";

function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.CartReducer);
  const priceTotal = useSelector((state) => state.TotalPriceReducer);
  const items = useSelector((state) => state.CartReducer.length);

  const deleteHandeler = (id, price) => {
    dispatch(Remove_From_Cart(id));
    dispatch(REMOVE_Price(price));


};



  return (
    <div>
      <div className="CartCont">
        <div className="left">
          {items > 0 ? (
            state.map((cartitms) => {
              return (
                <SingleCart
                  key={cartitms.id}
                  cartitms={cartitms}
                  deleteHandeler={deleteHandeler}
                ></SingleCart>
              );
            })
          ) : (
            <div>No Items Inside Cart</div>
          )}
        </div>
        <div className="right">
          <div className="paymentcont">
            <div className="price">Total Price ${priceTotal}</div>
            <div className="input">
              <input type="text" name="" id="" placeholder="Frist Name" />
            </div>
            <div className="input">
              <input type="text" name="" id="" placeholder="Last Name" />
            </div>
            <div className="input">
              <input type="text" name="" id="" placeholder="Phone Number" />
            </div>
            <div className="input">
              <input type="text" name="" id="" placeholder="Email" />
              optional
            </div>
            <div
              className="price"
              style={{ paddingTop: "0px", paddingBottom: "5px" }}
            >
              Payment Method
            </div>
            <div className="pmn">
              <p>
                <b>Cbe Bank</b> 100000000000000
              </p>{" "}
              <input type="radio" name="pmn" id="" />
            </div>
            <div className="pmn">
              <p>
                <b>Telebirr</b>0989489349
              </p>
              <input type="radio" name="pmn" id="" />
            </div>
            <div className="pmn">
              <p>
                <b>Abyssinia Bank</b>77075436
              </p>{" "}
              <input type="radio" name="pmn" id="" />
            </div>
            <div className="file">
              <input type="file" name="" id="" alt="" />
              screenshot payment info
            </div>
            <div className="button">check out</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
