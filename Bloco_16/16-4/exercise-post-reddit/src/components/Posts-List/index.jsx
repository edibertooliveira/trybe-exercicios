import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const main = {
  width: '100%',
  backgroundColor: '#e8f3ff',
}

const postList = {
  display: 'flex',
  padding: '15px',
  flexWrap: 'wrap',
};

function PostsList(props) {
  const { posts, isLoading, error } = props;
  return (
    <div style={main}>
      <div style={postList}>
        {(isLoading && '...Loading') ||
          (error && 'Failed!!, Subreddit not found ') ||
          posts.map((post) => {
            const { title, author, created } = post.data;
            return <Post key={created} title={title} author={author} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = ({ subreddit }) => ({
  isLoading: subreddit.isLoading,
  posts: subreddit.posts,
  error: subreddit.error,
});
export default connect(mapStateToProps)(PostsList);
