import styled from "styled-components";
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH } from "react-icons/fa";

export const PostBtn = styled.button<{ isClicked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;

  width: 100%;
  padding-block: 0.2em;

  border: none;
  border-radius: 0.2em;

  background-color: transparent;

  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.logo.Blue : theme.color.font.secondary};

  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

interface props extends React.HTMLAttributes<HTMLButtonElement> {
  type: "like" | "comment" | "share";
  isClicked?: boolean;
}

export const Btn: React.FC<props> = ({ type, isClicked, ...props }) => {
  switch (type) {
    case "comment":
      return (
        <PostBtn {...props}>
          <FaComment />
          <p>Comment</p>
        </PostBtn>
      );
    case "share":
      return (
        <PostBtn {...props}>
          <FaShare />
          <p>Share</p>
        </PostBtn>
      );
    case "like":
      return (
        <PostBtn {...props} isClicked={isClicked}>
          <FaThumbsUp />
          <p>Like</p>
        </PostBtn>
      );
    default:
      return (
        <PostBtn {...props}>
          <FaThumbsUp />
          <p>unknown</p>
        </PostBtn>
      );
  }
};

export const CommentOptionBtnStyled = styled.div`
  background-color: transparent;
  line-height: 0;

  border: none;
  border-radius: 50%;
  padding: 0.5em;

  flex-shrink: 0;

  :hover {
    background-color: ${({ theme }) => theme.color.bg.hover};
  }
`;

export const CommentOptionBtn = () => {
  return (
    <CommentOptionBtnStyled>
      <FaEllipsisH size="1em" />
    </CommentOptionBtnStyled>
  );
};
