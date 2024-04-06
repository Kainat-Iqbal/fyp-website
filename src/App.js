import './App.css';
import SideBar from './Components/AdminPanel/SideBar';
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
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
