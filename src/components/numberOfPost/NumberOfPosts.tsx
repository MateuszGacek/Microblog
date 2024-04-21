import { NumberOfPostsProps } from "../../models/NumberOfPostsProps";

const NumberOfPosts: React.FC<NumberOfPostsProps> = ({ numberOfPosts }) => {
  return (
    <h2>
      {numberOfPosts === 0
        ? "Our blog has no posts yet, be the first 😉"
        : `On our blog we have ${numberOfPosts}
        ${numberOfPosts === 1 ? " post" : " posts"}`}
    </h2>
  );
};

export default NumberOfPosts;
