import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "./ThemeContext";

const store=configureStore({
  reducer:Reducers,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
