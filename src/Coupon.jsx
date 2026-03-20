import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyCoupon } from "./CouponSlice";


function Coupon() {

  const [code, setCode] = useState("");
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.coupon);

  const handleApply = () => {
    dispatch(applyCoupon(code));
    setClicked(true);
  };

  return (
    <div>

      <h3>Apply Coupon</h3>

      <input
        type="text"
        placeholder="Enter coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={handleApply}>Apply Coupon</button>

      {/* Show message only after clicking */}
      {clicked && (
        coupon.applied ? (
          <p style={{ color: "green" }}>
            Coupon Applied! {coupon.discount}% Discount
          </p>
        ) : (
          <p style={{ color: "red" }}>
            Invalid Coupon
          </p>
        )
      )}

    </div>
  );
}

export default Coupon;