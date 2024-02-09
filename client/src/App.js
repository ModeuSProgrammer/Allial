// NOT AUTH
import Main from './pages/Main';
import LogIn from './pages/LogIn';
import MenuDay from './pages/MenuDay';

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<LogIn />} />
        <Route path="/menuday" element={<MenuDay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
