// NOT AUTH
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import MenuDay from './pages/MenuDay';
// AUTH
import Admin from './pages/Admin';
import AddUsers from './pages/AddUsers';
import AddFood from './pages/AddFood';
import Chief from './pages/Chief';
import User from './pages/User';

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<LogIn />} />
        <Route path="/menuday" element={<MenuDay />} />
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/chief" element={<Chief />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/adduser" element={<AddUsers />}></Route>
        <Route path="/addfood" element={<AddFood />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
