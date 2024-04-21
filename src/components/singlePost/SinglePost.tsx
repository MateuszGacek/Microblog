import IconButton from "../ui/IconButton";
import unLikeIcon from "../../assets/dislike.png";
import likeIcon from "../../assets/like.png";
import { SinglePostProps } from "../../models/SinglePostProps";
import "./singlePost.css";

const SinglePost: React.FC<SinglePostProps> = ({
  title,
  description,
  onDelete,
  onLike,
  onUnlike,
  like,
  unlike,
}) => {
  return (
    <div className="post-container">
      <h3 className="post-title">{title}</h3>
      <p className="post-description">{description}</p>
      <div className="btn-container">
        <div className="btn-vote-container">
          <IconButton onClick={onLike} numberOfLike={like} icon={likeIcon} />
          <IconButton
            onClick={onUnlike}
            numberOfLike={unlike}
            icon={unLikeIcon}
          />
        </div>
        <div>
          <button className="btn-delete-post" onClick={onDelete}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
