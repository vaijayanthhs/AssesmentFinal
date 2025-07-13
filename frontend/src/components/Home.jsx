// Home.jsx (Frontend)

import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios.get("http://localhost:3001/get")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.log("Error fetching posts:", err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (post) => {
    navigate('/add', { state: post });
  };

  return (
    <div className="homepage">
      <div className="card-container">
        {posts.map((post) => (
          <Card
            key={post._id}
            post={post} 
            onDelete={handleDelete} 
            onUpdate={handleUpdate} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;