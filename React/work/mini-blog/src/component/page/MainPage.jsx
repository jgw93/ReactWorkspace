import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import { usePosts } from "../../context/PostContext";

const Wrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin-top: 16px; 

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
`;

function MainPage(props) {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Wrapper>
      <Container>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContainer>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={filteredPosts}
          onClickItem={(post) => {
            navigate(`/post/${post.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
