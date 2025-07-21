import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rerendering and the value of a is ${a.current}..`);
  });

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
