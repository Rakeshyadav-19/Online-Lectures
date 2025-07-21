import { useState, useEffect } from "react";
import Navbar from "./components/3Useeffect/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    alert("Count was changed");
    setColor(color + 1);
  }, [count]);

  return (
    <>
      <Navbar color={"navy " + "blue" + color} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
