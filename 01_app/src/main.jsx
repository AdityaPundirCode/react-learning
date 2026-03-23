import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Newsapp from "./newsapp.jsx"
//import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/* //<div> */}
    <App />
    <Newsapp/>
    {/* //</div> */}
  </React.StrictMode>
)