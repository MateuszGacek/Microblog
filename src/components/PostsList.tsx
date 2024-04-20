import { useState } from "react";

import data from "../store/data.json";
import SinglePost from "./SinglePost";
import NumberOfPostTitle from "./NumberOfPostTitle";
import CreateNewPost from "./CreateNewPost";
import { posts } from "../models/posts.model";
import { notifyUser } from "../features/notifyUser";
import "./PostsList.css";

const PostsList: React.FC = () => {
  const [postsList, setPostsList] = useState<posts[]>(data);

  const deletePostHandler = (postId: number): void => {
    setPostsList((prevPosts) => {
      return prevPosts.filter((prevPost) => prevPost.id !== postId);
    });
  };

  const addPostHandler = (title: string, description: string): void => {
    const createPost: posts = {
      id: postsList.length + 1 + Math.random(),
      title: title,
      description: description,
      like: 0,
      unlike: 0,
    };
    setPostsList((prevValue) => [createPost, ...prevValue]);
    notifyUser();
  };

  const postLikeHandler = (postId: number): void => {
    let newValue: posts[] = postsList.map((post) => {
      if (post.id === postId) {
        ++post.like;
        return post;
      } else {
        return post;
      }
    });
    setPostsList(newValue);
  };

  const postUnlikeHandler = (postId: number): void => {
    let newValue: posts[] = postsList.map((post) => {
      if (post.id === postId) {
        --post.unlike;
        return post;
      } else {
        return post;
      }
    });
    setPostsList(newValue);
  };

  return (
    <div className="posts-container">
      <h1>#2</h1>
      <NumberOfPostTitle numberOfPosts={postsList.length} />

      {postsList.map((post) => {
        return (
          <SinglePost
            key={post.id}
            title={post.title}
            description={post.description}
            onDeleteClick={() => deletePostHandler(post.id)}
            onLikeClick={() => postLikeHandler(post.id)}
            onUnlikeClick={() => postUnlikeHandler(post.id)}
            like={post.like}
            unlike={post.unlike}
          />
        );
      })}
      <CreateNewPost onSubmit={addPostHandler} />
    </div>
  );
};

export default PostsList;
