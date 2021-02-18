import React from 'react';

function Post({title, post, author}) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{post}</p>
      <small>{author}</small>
    </div>
  );
}

export default Post;