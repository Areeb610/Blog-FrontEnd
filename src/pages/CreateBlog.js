import React, { useState } from 'react';
import QuillEditor from '../components/QuillEditor';
import './CreateBlog.css';

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogImage, setBlogImage] = useState(null);

  const handleViewBlog = () => {
    window.location.href = '/view';
  };

  const handleCreateBlog = () => {
    window.location.href = '/';
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBlogImage(file);
  };

  const handleSaveBlog = () => {
    // Create a new FormData object
    const formData = new FormData();
    formData.append('id', new Date().getTime().toString());
    formData.append('blogTitle', blogTitle);
    formData.append('blogContent', blogContent);
    formData.append('blogImage', blogImage);

    // You can now submit the data using fetch or any other method you prefer
    fetch('https://amazing-elemental-penalty.glitch.me/blog', {
      method: 'POST',
      body: formData,
      enctype: 'multipart/form-data',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Blog saved successfully!', data);
        // Redirect to the home page after saving the blog
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error while saving blog:', error);
      });
  };

  return (
    <div className="create-blog-container">
      <nav className="navbar">
        <h1>Areeb's Blog Corner</h1>
        <div className="navbar-buttons">
          <button onClick={handleViewBlog}>View Blog</button>
          <button onClick={handleCreateBlog}>Create Blog</button>
        </div>
      </nav>
      <div className="create-blog-content">
        <h2 style={{ border: 'black solid 1px', fontSize: 50 }}>Create Blog</h2>
        <div className="blog">
          <input
            type="text"
            placeholder="Enter Blog Title"
            style={{ width: '20%' }}
            name="blogTitle"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <QuillEditor
            value={blogContent}
            onChange={(content) => setBlogContent(content)}
          />
        </div>
        <div className="blog-buttons">
          <button onClick={handleSaveBlog}>Save Blog</button>
          <button onClick={handleViewBlog}>View Blog</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
