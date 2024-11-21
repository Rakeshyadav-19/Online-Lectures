import { useState } from "react";

// Counter
const App = () => {

    const [num, setNum] = useState(0)
    return (
        <div>

            <h2>Count is {num}</h2>

            <button onClick={() => setNum(num + 1)}>
                Increment
            </button>

            <button onClick={() => setNum(num - 1)}>
                Decremement
            </button>

        </div>
    );
}

export default App;