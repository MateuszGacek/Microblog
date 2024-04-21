import { useState } from "react";
import SinglePost from "../singlePost/SinglePost";
import NumberOfPosts from "../numberOfPost/NumberOfPosts";
import CreateNewPost from "../createNewPost/CreateNewPost";
import data from "../../store/data.json";
import { Post } from "../../models/Post.model";
import { notifyUser } from "../../utils/notifyUser";
import "./postsList.css";

const PostsList: React.FC = () => {
  const [postsList, setPostsList] = useState<Post[]>(data);

  const deletePost = (postId: number) => {
    setPostsList((prevPosts) => {
      return prevPosts.filter((prevPost) => prevPost.id !== postId);
    });
  };

  const addPost = (title: string, description: string) => {
    const createPost: Post = {
      // I know it's not allowed, sorry for the ID from increment + random
      id: postsList.length + 1 + Math.random(),
      title: title,
      description: description,
      like: 0,
      unlike: 0,
    };
    setPostsList((prevValue) => [createPost, ...prevValue]);
    notifyUser();
  };

  const postLike = (postId: number) => {
    const newValue: Post[] = postsList.map((post) => {
      if (post.id === postId) {
        return { ...post, like: (post.like += 1) };
      }
      return post;
    });
    setPostsList(newValue);
  };

  const postUnlike = (postId: number) => {
    const newValue: Post[] = postsList.map((post) => {
      if (post.id === postId) {
        return { ...post, unlike: (post.unlike -= 1) };
      }
      return post;
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
            {...post}
            key={post.id}
            onDelete={() => deletePost(post.id)}
            onLike={() => postLike(post.id)}
            onUnlike={() => postUnlike(post.id)}
          />
        );
      })}
      <CreateNewPost onSubmit={addPost} />
    </div>
  );
};

export default PostsList;
