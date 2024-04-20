import { singlePost } from "../models/singlePost.model";
import IconButton from "./ui/IconButton";
import unLikeIcon from "../assets/dislike.png";
import likeIcon from "../assets/like.png";
import "./SinglePost.css";

const SinglePost: React.FC<singlePost> = ({
  title,
  description,
  onDeleteClick,
  onLikeClick,
  onUnlikeClick,
  like,
  unlike,
}) => {
  return (
    <div className="post-container">
      <h3 className="post-title">{title}</h3>
      <p className="post-description">{description}</p>
      <div className="btn-container">
        <div className="btn-vote-container">
          <IconButton
            onClick={onLikeClick}
            numberOfLike={like}
            icon={likeIcon}
          />
          <IconButton
            onClick={onUnlikeClick}
            numberOfLike={unlike}
            icon={unLikeIcon}
          />
        </div>
        <div>
          <button className="btn-delete-post" onClick={onDeleteClick}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
