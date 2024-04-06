import logo from './logo.svg';
import './App.css';
import MainScreen from './Components/LandingPage/MainScreen';
import LoginPage from './Components/LandingPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>

        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
