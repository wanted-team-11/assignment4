import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
