import { createSlice } from "@reduxjs/toolkit";
import { coupons } from "./Coupons";

const initialState = {
  code: "",
  discount: 0,
  applied: false,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,

  reducers: {

    applyCoupon: (state, action) => {

      const couponCode = action.payload.toUpperCase();

      if (coupons[couponCode]) {

        state.code = couponCode;
        state.discount = coupons[couponCode];
        state.applied = true;

      } else {

        state.code = "";
        state.discount = 0;
        state.applied = false;

      }
    },

    removeCoupon: (state) => {
      state.code = "";
      state.discount = 0;
      state.applied = false;
    }

  }
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;