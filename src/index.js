import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";

axios.defaults.baseURL = "http://localhost:3001";

// "https://icube-backend.herokuapp.com"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
