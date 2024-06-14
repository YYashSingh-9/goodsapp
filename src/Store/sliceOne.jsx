import { createSlice } from "@reduxjs/toolkit";

const initialState_ = {
  productSchema: [
    {
      key: 1,
      id: 209,
      display_id: 8,
      owner: 1079,
      name: "New Product",
      category: "The god of War",
      characteristics: "New Product Characteristics",
      features: "",
      brand: "New Product Brand",
      sku: [
        {
          id: 248,
          selling_price: 54,
          max_retail_price: 44,
          amount: 33,
          unit: "kg",
          quantity_in_inventory: 0,
          product: 209,
        },
        {
          id: 247,
          selling_price: 32,
          max_retail_price: 32,
          amount: 33,
          unit: "kg",
          quantity_in_inventory: 0,
          product: 209,
        },
        {
          id: 246,
          selling_price: 23,
          max_retail_price: 21,
          amount: 22,
          unit: "kg",
          quantity_in_inventory: 1,
          product: 209,
        },
      ],
      updated_on: "2024-05-24T12:46:41.995873Z",
      adding_date: "2024-05-24T12:46:41.995828Z",
    },
  ],
  saleOrderSchema: {
    customer_id: 11908,
    items: [
      {
        sku_id: 220,
        price: 12,
        quantity: 12,
      },
    ],
    paid: false,
    invoice_no: "Invoice - 1212121",
    invoice_date: "7/5/2024",
  },
  customerSchema: {
    id: 9,
    customer: 11908,
    customer_profile: {
      id: 11908,
      name: "Ram",
      color: [182, 73, 99],
      email: "jesus_christ@church.com",
      pincode: "Mumbai",
      location_name: "Mumbai, Maharashtra, India",
      type: "C",
      profile_pic: null,
      gst: "",
    },
  },
  multiselectVal: [],
  productSelected: "",
};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initialState_,
  reducers: {
    multiSelectToggle(state, action) {
      const val = action.payload;
      const arry = [];
      state.multiselectVal = arry.push(...val);
      state.multiselectVal = arry;
      state.productSelected = state.productSchema.filter((el, i) => {
        console.log(el.name, i, state.multiselectVal[i].value);
        return el.name === state.multiselectVal[i].value;
      });
    },
  },
});

export const actions = sliceOne.actions;

export default sliceOne;
