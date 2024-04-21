import { IconButtonProps } from "../../models/IconButtonProps";
import "./iconButton.css";

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  numberOfLike,
  icon,
}) => {
  return (
    <div className="btn-controler">
      <span className="btn-label">{numberOfLike}</span>
      <button
        style={{ backgroundImage: `url(${icon})` }}
        onClick={onClick}
        className="btn-icon"
      ></button>
    </div>
  );
};

export default IconButton;
