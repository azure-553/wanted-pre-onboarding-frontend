import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from '../../pages/MainPage';
import SignupPage from '../../pages/SignupPage';
import SigninPage from '../../pages/SigninPage';
import TodoPage from '../../pages/TodoPage';

const Router = () => {
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