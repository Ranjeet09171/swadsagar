import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import couponReducer from "./CouponSlice";
import orderReducer from "./OrderSlice";


export const store = configureStore({
  
  reducer: {
    cart: cartReducer,
    coupon: couponReducer,
    order: orderReducer
  }
});

export default store;