import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import LandingPage from './components/view/LandingPage/LandingPage';
import LoginPage from './components/view/LoginPage/LoginPage';
import RegisterPage from './components/view/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App