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
import { jwtDecode } from 'jwt-decode';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuth } from './actions/user'
import { setUser } from './store/userReducer';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.user.isAuth)
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!isAuth & token) {
      if (token) {
        dispatch(checkAuth())
      }
    }
  }, [dispatch, isAuth])

  useEffect(() => {
    const updateUserData = () => {
      if (token != undefined) {
        let decodedToken = jwtDecode(token);
        let user = {
          ID: decodedToken.ID,
          email: decodedToken.email,
          RoleID: decodedToken.RoleID,
        };
        dispatch(setUser(user));
      }
    };
    updateUserData();
  }, [token, dispatch]);

  const RoleID = useSelector(state => state.user.currentUser.RoleID)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!isAuth ? <Main /> : <Navigate to="/menuday" />} />
        <Route path="/auth" element={!isAuth ? <LogIn /> : <Navigate to="/menuday" />} />

        <Route path="/menuday" element={isAuth ? <MenuDay /> : <Navigate to="/auth" />} />
        <Route path="/admin" element={isAuth && RoleID === 3 ? <Admin /> : <Navigate to="/auth" />} />
        <Route path="/chief" element={isAuth && RoleID === 2 ? <Chief /> : <Navigate to="/auth" />} />
        <Route path="/user" element={isAuth && RoleID === 1 ? <User /> : <Navigate to="/auth" />} />
        <Route path="/adduser" element={isAuth ? (RoleID === 3 ? <AddUsers /> : <Navigate to="/menuday" />) : (<Navigate to="/auth" />)} />
        <Route path="/addfood" element={isAuth ? (RoleID === 3 ? <AddFood /> : <Navigate to="/menuday" />) : (<Navigate to="/auth" />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
