import React from 'react';

const postItem = {
  backgroundColor: '#fff',
  borderColor: 'rgb(27, 31, 35, 0.15)',
  boxShadow: '0 1px 0 rgba(27,31,35,0.04)',
  borderRadius: '6px',
  margin: '15px',
  padding: '15px',
  width: '40%',
}

function Post({title, author}) {
  return (
    <div style={ postItem }>
      <h3>{title}</h3>
      <small>{author}</small>
    </div>
  );
}

export default Post;