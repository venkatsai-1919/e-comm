import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import ShopContextProvider from "./Context/shopContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
      <ShopContextProvider>
      <App />
      </ShopContextProvider>
      
  
);