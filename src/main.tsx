import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from "../redux-old-school";
// import "./index.css";
import { store } from "./store";
import { AppToolkit } from "./toolkit/AppToolkit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppToolkit />
    </Provider>
  </React.StrictMode>
);
