
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useState, useMemo, useEffect } from "react";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from "./CartSlice";

import "./Cart.css";
import { QRCode } from "react-qr-code";
import { applyCoupon } from "./CouponSlice";
import { addOrder } from "./OrderSlice";

function Cart() {

  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const [checkout, setCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountPer, setDiscountPer] = useState(0);
  const [input, setInput] = useState("");
  const [discountMsg, setDiscountMsg] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const coupon = useSelector(state => state.coupon);

  // Fix coupon update using useEffect
  useEffect(() => {
    if (coupon.applied) {
      setDiscount(coupon.discount);
    }
  }, [coupon]);

  // Optimized Bill Calculations using useMemo
  const { discountAmount, subTotal, gstAmount, finalAmount } = useMemo(() => {

    const discountAmount =
      (totalPrice * discount) / 100 + (totalPrice * discountPer) / 100;

    const subTotal = totalPrice - discountAmount;

    const gstAmount = (subTotal * 18) / 100;

    const finalAmount = subTotal + gstAmount;

    return {
      discountAmount,
      subTotal,
      gstAmount,
      finalAmount
    };

  }, [totalPrice, discount, discountPer]);

  let orderId = Math.floor(Math.random() * 1000000);
  let shippingCost = 100;

  let templateParams = {
    order_id: orderId,
    orders: items.map(item => ({
      name: item.name,
      units: item.quantity,
      price: item.price.toFixed(2)
    })),
    cost: {
      shipping: shippingCost.toFixed(2),
      tax: gstAmount.toFixed(2),
      total: finalAmount.toFixed(2)
    },
    email: customerEmail
  };

  let purchaseDetails = {
    orderId: orderId,
    shippingCost: shippingCost,
    date: new Date().toLocaleDateString(),
    items: items.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price.toFixed(2)
    })),
    totalAmount: finalAmount.toFixed(2)
  };

  const sendOrderMail = () => {
    emailjs
      .send(
        "service_qkwwegq",
        "template_7xhluw6",
        templateParams,
        "Q3wsxhba3EZq2fott"
      )
      .then(() =>
        toast.success("Checkout email sent successfully!", {
          theme: "colored"
        })
      )
      .catch((err) => {
        toast.error("Failed to send checkout email!", {
          theme: "colored"
        });
        console.error("Email sending failed", err);
      });

    dispatch(clearCart());
  };

  return (
    <div>

      <h2>🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>

          {items.map(item => (
            <div key={item.id} className="cart-item">

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div>
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>

                <div className="qty-controls">

                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    ➖
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    ➕
                  </button>

                </div>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));

                    toast.success("Item removed from cart 🛒", {
                      theme: "colored"
                    });
                  }}
                  className="remove-button"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          {/* Bill Section */}

          <div className="bill-box">

            <h3>Bill Calculation</h3>

            <p>Total Amount: ₹ {totalPrice}</p>

            <p>Discount: {discount}%</p>

            <p>Discount Amount: ₹ {discountAmount.toFixed(2)}</p>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter coupon code"
            />

            <button
              onClick={() => {
                dispatch(applyCoupon(input));
                setInput("");
              }}
            >
              Apply Coupon
            </button>

            <p>Subtotal: ₹ {subTotal.toFixed(2)}</p>

            <p>GST (18%): ₹ {gstAmount.toFixed(2)}</p>

            <h3>Final Amount: ₹ {finalAmount.toFixed(2)}</h3>

            <div className="discount-buttons">

              <button
                onClick={() => {
                  setDiscountPer(10);
                  setDiscountMsg("10% discount is applied ✅");
                }}
              >
                10%
              </button>

              <button
                onClick={() => {
                  setDiscountPer(20);
                  setDiscountMsg("20% discount is applied ✅");
                }}
              >
                20%
              </button>

              <button
                onClick={() => {
                  setDiscountPer(30);
                  setDiscountMsg("30% discount is applied ✅");
                }}
              >
                30%
              </button>

            </div>

            {discountMsg && (
              <p className="discount-message">{discountMsg}</p>
            )}

          </div>

          <div>
            <button onClick={() => setCheckout(true)}>
              CheckOut
            </button>
          </div>

          {checkout && (
            <div>
              <button onClick={() => setPaymentMethod("qr")}>
                UPI
              </button>

              <button onClick={() => setPaymentMethod("card")}>
                Card
              </button>
            </div>
          )}

          {paymentMethod === "qr" && (
            <div>

              <QRCode
                value={`upi://pay?pa=ranjeetbunkar1111@ybl&pn=Ranjeet&am=${Number(finalAmount).toFixed(2)}&cu=INR`}
              />

            </div>
          )}

          <h3>Total: ₹ {finalAmount}</h3>

          <input
            type="email"
            placeholder="Enter your email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />

          <button
            onClick={() => {
              sendOrderMail();
              dispatch(addOrder(purchaseDetails));
            }}
          >
            Email Send
          </button>

        </>
      )}

    </div>
  );
}

export default Cart;

