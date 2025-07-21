import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef();

  useEffect(() => {
    console.log(`First rendering..`);
    btnRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <>
      <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <button
        onClick={() => {
          btnRef.current.style.display = "none";
        }}
      >
        Change me
      </button>
    </>
  );
}

export default App;
