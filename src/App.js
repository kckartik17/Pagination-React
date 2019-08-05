import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setLoading(false);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const indexOflastPost = currentPage * postsPerPage;
  const indexOffirstPost = indexOflastPost - postsPerPage;
  const currentposts = posts.slice(indexOffirstPost, indexOflastPost);

  const paginate = number => setCurrentPage(number);

  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-primary mb-3 text-center">My Posts</h1>
        <Posts posts={currentposts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
