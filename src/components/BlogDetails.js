import React from 'react';

const BlogDetails = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogDetails;
