import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import PostModifyPage from "./component/page/PostModifyPage";
import { PostProvider } from "./context/PostContext";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <MainTitleText>소플의 미니 블로그</MainTitleText>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/post-write" element={<PostWritePage />} />
          <Route path="/post/:postId" element={<PostViewPage />} />
          <Route path="/post-edit/:postId" element={<PostModifyPage />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}
export default App;
