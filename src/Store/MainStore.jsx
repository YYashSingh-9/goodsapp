import { configureStore } from "@reduxjs/toolkit";
import sliceOne from "./sliceOne";

const mainStore = configureStore({ reducer: sliceOne.reducer });

export default mainStore;
