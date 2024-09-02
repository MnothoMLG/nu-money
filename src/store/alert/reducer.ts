import { createReducer } from "@reduxjs/toolkit";
import { setAlertState, clearAndHideAlert } from "./actions";
import { AlertState } from "./types";

const INITIAL_STATE: Partial<AlertState> = {
  shown: false,
  message: undefined,
  type: "confirm",
  primary_btn: undefined,
  secondary_btn: undefined,
};

export const alertReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setAlertState, (state, action) => {
      if (action.payload) {
        const { payload } = action;
        return { ...state, ...payload, shown: true };
      }
    })
    .addCase(clearAndHideAlert, (state) => {
      return { ...state, ...INITIAL_STATE, shown: false };
    });
});
