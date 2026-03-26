import { useEffect, useState } from "react";
import API from "../api/api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By: {post.author.username}</small>
        </div>
      ))}
    </div>
  );
}

export default Home;