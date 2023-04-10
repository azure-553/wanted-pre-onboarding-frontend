import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from '../../pages/MainPage';
import SignupPage from '../../pages/SignupPage';
import SigninPage from '../../pages/SigninPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/signin" element={<SigninPage/>}/>
            <Route path='/todo'/>
        </Switch>
    </>
  )
}

export default Router