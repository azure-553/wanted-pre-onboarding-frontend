import React from 'react'
import {Route,  Routes as Switch} from "react-router-dom";
import MainPage from '../../pages/MainPage';

const Router = () => {
  return (
    <>
        <Switch>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signup"/>
            <Route path="/signin"/>
            <Route path='/todo'/>
        </Switch>
    </>
  )
}

export default Router