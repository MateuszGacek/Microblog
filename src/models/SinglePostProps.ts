export type SinglePostProps = {
  title: string;
  description: string;
  onDelete: () => void;
  onLike: () => void;
  onUnlike: () => void;
  like: number;
  unlike: number;
};
