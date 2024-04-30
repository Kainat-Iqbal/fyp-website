import logo from './logo.svg';
import './App.css';
import MainScreen from './Components/LandingPage/MainScreen';
import LoginPage from './Components/LandingPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/TeacherPanel/Sidebar';
import Dashboard from './Components/TeacherPanel/Dashboard';
import Courses from './Components/TeacherPanel/Courses';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/bar' element={<SideBar />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/teacher' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
