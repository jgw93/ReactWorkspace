import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import User from './component/User';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/info">info</Link></li>
        <li><Link to="/user?id=aa123&age=20">회원 페이지</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/user" element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
