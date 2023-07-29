import React, { useEffect, useState } from 'react';
import './ViewBlog.css';

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const handleCreateBlog = () => {
    window.location.href = '/';
  };

  const fetchBlogs = () => {
    fetch('https://amazing-elemental-penalty.glitch.me/blog')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log('Blogs fetched successfully!', data);
      })
      .catch((error) => {
        console.error('Error while fetching blogs:', error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const OpenViewBlog = () => {
    window.location.href = '/view';
  };

  return (
    <div>
      <nav className="navbar">
        <h1>Areeb's Blog Corner</h1>
        <div className="navbar-buttons">
          <button onClick={OpenViewBlog}>View Blog</button>
          <button onClick={handleCreateBlog}>Create Blog</button>
        </div>
      </nav>
      <div>
        <h1>View Blogs</h1>
        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
              <h2>{blog.blogTitle}</h2>
              <h3>{blog.id}</h3>
              {blog.blogImage && <img  className = "image"src = {
                `https://amazing-elemental-penalty.glitch.me/images/${blog.blogImage}`
              } alt="Blog" />}
              <div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;
