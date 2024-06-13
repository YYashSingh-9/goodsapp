import { createSlice } from "@reduxjs/toolkit";

const initialState_ = {};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initialState_,
  reducers: {},
});

export const actions = sliceOne.actions;

export default sliceOne;
