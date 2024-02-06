import React from "react";
import { createRoot } from "react-dom/client";  // Correct import path

// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";  // Correct import for Provider
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Use createRoot from "react-dom/client"
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
