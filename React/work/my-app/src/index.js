import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './Ch03/Library';
import Student from './Ch03/Student';
import ConfirmDialog from './Ch04/ConfirmDialog';
import Clock from './Ch04/Clock';
import PropsEx from './Ch05/PropsEx';
import CommentList from './Ch05/CommentList';
import BoardList from './Ch05/BoardList';
import NotificationList from './Ch06/NotificationList';
import Info from './Ch07/Info';
import Average from './Ch07/Average';
import SignUp2 from './Ch11/SingUp2';
import Counter from './Ch07/Counter';
import Calculator from './Ch12/Calculator';
import WelcomeDialog from './Ch13/Dialog';
import FancyBorder from './Ch13/FancyBorder';
import SignUpDialog from './Ch13/Dialog';
import ProfileCard from './Ch13/ProfileCard';
import MainTest from './Ch14/MainTest';
import MainContent from './Ch14/MainContent';
import DarkOrLight from './Ch14/DarkOrLight';
import MainPage from './Ch15/MainPage';
import Blocks from './Ch15/Blocks';
import AsnycTestEx from './Ch18/AsnycTestEx';
import FetchAxios from './Ch18/FetchAxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Info/> */}
    {/* <Average/> */}
    {/* <Library /> */}
    {/* <Student /> */}
    {/* <ConfirmDialog /> */}
    {/* <Clock /> */}
    {/* <PropsEx /> */}
    {/* <CommentList /> */}
    {/* <BoardList/> */}
    {/* <NotificationList /> */}
    {/* <SignUp2/> */}
    {/* <Counter/> */}
    {/* <Calculator/> */}
    {/* <SignUpDialog/> */}
    {/* <ProfileCard/> */}
    {/* <MainTest /> */}
    {/* <DarkOrLight/> */}
    {/* <MainPage/> */}
    {/* <Blocks/> */}
    {/* <AsnycTestEx/> */}
    <FetchAxios/>
  </React.StrictMode>
);
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
