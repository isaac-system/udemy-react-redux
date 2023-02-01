import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // react-redux 에서도 ContextProvider 와 비슷한 형태 ex) <ContextProvider value = {value}>
  <Provider store={store}>
    <App />
  </Provider>
);
