import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { store } from "./store"

import App from "./App"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
