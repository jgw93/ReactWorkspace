
import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './users/addUser';
import EditUser from './users/editUser';
import ViewUser from './users/viewUser';
import BoardNavbar from './layout/BoardNavbar';
import BoardHome from './pages/BoardHome';
import AddBoard from './board/addBoard';
import EditBoard from './board/editBoard';
import ViewBoard from './board/viewBoard';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <BoardNavbar />
        <Routes>
          <Route path="/" element={<BoardHome />} />
          <Route path="/addboard" element={<AddBoard />} />
          <Route path="/editboard/:bno" element={<EditBoard />} />
          <Route path="/viewboard/:bno" element={<ViewBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
