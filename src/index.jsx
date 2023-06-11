import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_APP_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
)
