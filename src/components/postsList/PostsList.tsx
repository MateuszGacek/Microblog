import { useState } from "react";

import data from "../../store/data.json";
import SinglePost from "../singlePost/SinglePost";
import NumberOfPosts from "../numberOfPost/NumberOfPosts";
import CreateNewPost from "../createNewPost/CreateNewPost";
import { Post } from "../../models/Post.model";
import { notifyUser } from "../../utils/notifyUser";
import "./postsList.css";

const PostsList: React.FC = () => {
  const [postsList, setPostsList] = useState<Post[]>(data);

  const deletePostHandler = (postId: number): void => {
    setPostsList((prevPosts) => {
      return prevPosts.filter((prevPost) => prevPost.id !== postId);
    });
  };

  const addPostHandler = (title: string, description: string): void => {
    const createPost: Post = {
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
    let newValue: Post[] = postsList.map((post) => {
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
    let newValue: Post[] = postsList.map((post) => {
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
      <NumberOfPosts numberOfPosts={postsList.length} />

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
