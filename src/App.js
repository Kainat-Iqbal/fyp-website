import './App.css';
import AddTeacher from './Components/AdminPanel/Add/AddTeacher';
import Home from './Components/AdminPanel/Home';
import SideBar from './Components/AdminPanel/SideBar';
import ViewTeacher from './Components/AdminPanel/View/ViewTeacher';
import LoginPage from './Components/LandingPage/LoginPage';
import MainScreen from './Components/LandingPage/MainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainScreen/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/bar' element={<SideBar/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addTeacher' element={<AddTeacher/>}/>
        <Route path='/viewTeacher' element={<ViewTeacher/>}/>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
