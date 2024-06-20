import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { usePosts } from "../../context/PostContext";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 16px;
  font-weight: 32;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { posts, setPosts } = usePosts();
  const post = posts.find((item) => item.id === parseInt(postId));
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (!comment) return;

    const newComment = {
      id: new Date().getTime(),
      content: comment,
    };

    const updatedPosts = posts.map((item) =>
      item.id === parseInt(postId)
        ? { ...item, comments: [...item.comments, newComment] }
        : item
    );
    setPosts(updatedPosts);
    setComment("");
  };

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate("/");
          }}
        />
        <Button
          title="삭제하기"
          onClick={() => {
            const updatedPosts = posts.filter((item) => item.id !== parseInt(postId));
            setPosts(updatedPosts);
            navigate("/");
          }}
        />
        <Button
          title="수정하기"
          onClick={() => {
            navigate(`/post-edit/${postId}`);
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <Button title="댓글 작성하기" onClick={handleCommentSubmit} />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
