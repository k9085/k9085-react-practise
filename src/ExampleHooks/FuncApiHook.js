import axios from "axios";
import React, { useState, useEffect } from "react";

const FuncApiHook = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};
export default FuncApiHook;
