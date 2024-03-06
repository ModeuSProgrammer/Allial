// NOT AUTH
import Main from './pages/Main';
import LogIn from './pages/LogIn';
// AUTH
import MenuDay from './pages/MenuDay';

import Admin from './pages/Admin';
import AddUsers from './pages/AddUsers';
import AddFood from './pages/AddFood';
import Chief from './pages/Chief';
import User from './pages/User';

import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuth } from './actions/user'

function App() {
  // для проверки авторизации пользователя на сервисе
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!isAuth) {
      dispatch(checkAuth())
    }
  }, [dispatch, isAuth])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isAuth ? <Main /> : <Navigate to="/menuday" />} />
        <Route path="/auth" element={!isAuth ? <LogIn /> : <Navigate to="/menuday" />} />

        <Route path="/menuday" element={isAuth ? <MenuDay /> : <Navigate to="/auth" />} />
        <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/auth" />} />
        <Route path="/chief" element={isAuth ? <Chief /> : <Navigate to="/auth" />} />
        <Route path="/user" element={isAuth ? <User /> : <Navigate to="/auth" />} />
        <Route path="/adduser" element={isAuth ? <AddUsers /> : <Navigate to="/auth" />} />
        <Route path="/addfood" element={isAuth ? <AddFood /> : <Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
