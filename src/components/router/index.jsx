import React, { useEffect } from 'react'
import {Route,  Routes as Switch, useNavigate} from "react-router-dom";
import MainPage from '../../pages/MainPage';
import SignupPage from '../../pages/SignupPage';
import SigninPage from '../../pages/SigninPage';
import TodoPage from '../../pages/TodoPage';

const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const link = window.location.pathname;

    if (token && (link === '/signin' || link === '/signup')) {
      navigate('/todo');
    }

  },[navigate]);
  
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path='/todo' element={<TodoPage/>}/>
        </Switch>
    </>
  )
}

export default Router