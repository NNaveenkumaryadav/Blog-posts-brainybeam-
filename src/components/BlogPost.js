// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
  const { postId } = useParams(); // Retrieve postId from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post data based on postId
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [postId]);

  if (!post) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
