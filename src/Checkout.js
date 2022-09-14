import React from "react";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  // to pull item from the basket
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {/* when we add an item to a basket it will map through and show it inside of the checkout page */}

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* for testing/styling purposes without adding an item into basket
          
          
          <CheckoutProduct
            id="112342"
            title="This is a test, lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            price={199.99}
            rating={5}
          />

          <CheckoutProduct
            id="112342"
            title="This is a test, lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"
            price={199.99}
            rating={5}
          /> */}

          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
