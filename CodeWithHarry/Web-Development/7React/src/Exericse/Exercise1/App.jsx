// You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card
// Use this API: https://jsonplaceholder.typicode.com/posts

// Hint:
// Create a state for the data which will be fetched using the Json Placeholder API
// Inside useEffect, use fetch to populate that state and then use map to render the cards from that state
import { useEffect, useState } from "react";
import axios from "axios";
import "./1Exercise.css";

function App() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setposts(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // Harry sir
  // const fetchData = async () => {
  //   let a = await fetch("https://jsonplaceholder.typicode.com/posts")
  //   let data = await a.json()
  //   setCards(data)
  //   console.log(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className="container">
      {posts.map((post) => {
        return (
          <div key={post.id} className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
