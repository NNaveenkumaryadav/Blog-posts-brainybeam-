// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="blog-list">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => {
          // Use Lorem Picsum to fetch a random image for each post
          const imageUrl = `https://picsum.photos/50/50?random=${post.id}`;

          return (
            <li key={post.id}>
              <div className="post-item">
                <img
                  src={imageUrl}
                  alt={post.title}
                  className="post-image"
                />
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogList;
