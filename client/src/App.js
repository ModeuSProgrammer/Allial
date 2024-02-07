import Main from './pages/Main';
import LogIn from './pages/LogIn';

import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
