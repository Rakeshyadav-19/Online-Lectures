import React from "react";
import { useState } from "react";

function App() {
  // const [name, setName] = useState("Harry")
  const [form, setForm] = useState({});

  const handleClick = () => {
    alert("Hey I am clicked");
  };

  const handleMouseOver = () => {
    alert("Hey I am a mouse over");
  };

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
          I am a red div
        </div> */}

      {/* <input
        type="text"
        name="email"
        value={var}
        onChange={handleChange}
      /> 
        we use setvar(e.target.value)
      */}
      {/* we do this to check if it exist or not so that if it does not exist make it blank string as empty state we cannot edit it in form*/}
      <input
        type="text"
        name="email"
        value={form.email ? form.email : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone ? form.phone : ""}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
