// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccountType from './components/AccountType.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountType />} />
      {/* Define other routes here */}
    </Routes>
  );
}

export default App;
