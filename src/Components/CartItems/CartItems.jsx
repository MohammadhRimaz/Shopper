import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
import React, { useContext } from "react";
import remove_icon from "../Assets/bin.png";
import add_icon from "../Assets/plus.png";
import minus_icon from "../Assets/minus.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    minusOneFromCart,
    addOneFromCart,
  } = useContext(ShopContext);
  return (
    <div className="cartitems">
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitmes-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <div className="cartitmes-format-main-right">
                  <p>
                    Title: <span>{e.name}</span>
                  </p>
                  <p>
                    Price: <span>${e.new_price}</span>
                  </p>
                  <p>
                    Quantity:{" "}
                    <img
                      className="add-icon"
                      src={add_icon}
                      alt=""
                      onClick={() => {
                        addOneFromCart(e.id);
                      }}
                    />
                    <span className="quantity">{cartItems[e.id]}</span>
                    <img
                      className="add-icon"
                      src={minus_icon}
                      alt=""
                      onClick={() => {
                        minusOneFromCart(e.id);
                      }}
                    />
                  </p>
                  <p>
                    Total: <span>${e.new_price * cartItems[e.id]}</span>
                  </p>{" "}
                  <p>
                    <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      alt=""
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </p>
                </div>
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type=" text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
