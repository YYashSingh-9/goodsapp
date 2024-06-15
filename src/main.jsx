import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import mainStore from "./Store/MainStore.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./Components/LoginPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import CompletedSaleOrder from "./Components/CompletedSaleOrder.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/completed-orders", element: <CompletedSaleOrder /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
