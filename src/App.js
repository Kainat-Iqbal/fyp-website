import './App.css';
import Home from './Components/AdminPanel/Home';
import SideBar from './Components/AdminPanel/SideBar';
import TopBar from './Components/AdminPanel/TopBar';
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
        <Route path='/t' element={<TopBar/>}/>

        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
