import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import { Provider } from "./containers/Provider"

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
)
