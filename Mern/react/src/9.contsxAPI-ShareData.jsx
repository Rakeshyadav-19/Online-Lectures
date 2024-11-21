// Context api is Sate management tool, it helps centralize data.

import { useContext } from "react";
import Footer from "./components/Footer";
import { DataContext } from "./context/UsersContext";

// As passing data in props is only from top to botton not backward.
const App = () => {
  // To recive data, the variable name can be anything
  const data = useContext(DataContext);
  console.log(data)
  return (
    <div>
      <h1>This is APP.jsx, with username from UsersContext.jsx is {data.username}</h1>
      <Footer />
    </div>
  );
};

export default App;
