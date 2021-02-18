import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function PostsList(props) {
  const { posts, isLoading, error } = props;
  return (
    <div className="postList">
      {(isLoading && '...Loading') ||
        (error && 'Failed!!, Subreddit not found ') ||
        posts.map((post) => {
          const { title, author, selftext, created } = post.data;
          return (
            <Post key={created} post={selftext} title={title} author={author} />
          );
        })}
    </div>
  );
}
const mapStateToProps = ({ subreddit }) => ({
  isLoading: subreddit.isLoading,
  posts: subreddit.posts,
  error: subreddit.error,
});
export default connect(mapStateToProps)(PostsList);
