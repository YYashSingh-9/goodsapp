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
  currentOpenOrder: {
    customer_id: 0,
    items: [
      {
        sku_id: 0,
        price: 0,
        quantity: 0,
      },
    ],
    paid: false,
    name: "",
    price: 0,
    invoice_no: "",
    invoice_date: "",
  },
  completedSales: [
    {
      customer_id: 11908,
      items: [
        {
          sku_id: 248,
          price: 22,
          quantity: 2,
        },
      ],
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
      ],
      paid: false,
      name: "yash",
      price: 44,
      invoice_no: "Invoice - 1212121",
      invoice_date: "2024-06-19",
    },
  ],
  multiselectVal: [],
  productSelected: "",
  activeSaleOrders: [],
  loginState: false,
  logged: "",
};

const sliceOne = createSlice({
  name: "sliceOne",
  initialState: initialState_,
  reducers: {
    selectProduct(state, action) {
      const selectedOpts = action.payload;

      if (selectedOpts.length >= 1) {
        state.productSelected = state.productSchema.filter((el, i) => {
          if (selectedOpts[i].value) {
            return el.name === selectedOpts[i].value;
          } else {
            return [];
          }
        });
      } else {
        state.productSelected = [];
      }
    },
    addSaleOrder(state, action) {
      const data = action.payload;
      let item = {
        sku_id: data.sku_id,
        price: data.sellingRate,
        quantity: data.totalItem,
      };

      let arrObj = {
        name: data.name,
        customer_id: 11908,
        items: [],
        paid: false,
        invoice_no: "Invoice - 1212121",
        invoice_date: data.date,
        price: data.price,
      };
      arrObj.items.push(item);
      console.log(arrObj, item, data);

      let arr2 = [...state.activeSaleOrders];
      arr2.push(arrObj);
      state.activeSaleOrders = arr2;
    },
    currentOrderSetter(state, action) {
      const name = action.payload;
      state.currentOpenOrder = state.activeSaleOrders.find(
        (el) => el.name === name
      );
    },

    editSaleOrder(state, action) {
      const editedData = action.payload.data;
      const customerName = action.payload.name;
      let itemArr = {
        sku_id: editedData.sku_id,
        price: editedData.sellingRate,
        quantity: editedData.totalItem,
      };

      const itemIndex = state.activeSaleOrders.findIndex(
        (el) => el.name === customerName
      );
      const arr1 = state.activeSaleOrders;
      const item = arr1[itemIndex];
      const editedItem = {
        ...item,
        name: editedData.name,
        items: [itemArr],
        price: editedData.price,
      };

      state.activeSaleOrders[itemIndex] = editedItem;
    },
    loginFunction(state, action) {
      const obj = action.payload;

      if (obj.username === "Admin@Yash" && obj.password === "Yash9000") {
        state.loginState = true;
        state.logged = true;
        return Promise.resolve("logged in");
      }
      if (obj.username !== "Admin@Yash" && obj.password !== "Yash9000") {
        state.loginState = false;
        state.logged = false;
        return Promise.reject("Incorrect credentials");
      }
    },
  },
});

export const actions = sliceOne.actions;

export default sliceOne;
