export type singlePost = {
  key: number;
  title: string;
  description: string;
  onDeleteClick: () => void;
  onLikeClick: () => void;
  onUnlikeClick: () => void;
  like: number;
  unlike: number;
};
