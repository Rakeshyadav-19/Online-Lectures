import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too",
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo",
    },
  ]);

  // const Todo = ({todo}) => {
  //   return (<>
  //   <div className="m-4 border border-1 border-purple-400">

  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>
  //     </>)
  // }
  return (
    <>
      {/* If true ? do this : else do this */}
      {showbtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}

      {/* If true do this */}
      {/* {showbtn && <button>showbtn is true</button>} */}

      {todos.map((todo) => {
        // return <Todo key={todo.title} todo={todo}/>
        return (
          <div
            key={todo.title}
            className="m-4 border border-1 border-purple-400"
          >
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle showbtn</button>
      </div>
    </>
  );
}

export default App;
