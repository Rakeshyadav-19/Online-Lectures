import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import UsersContext from "./context/UsersContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersContext>
    <App />
  </UsersContext>
);
