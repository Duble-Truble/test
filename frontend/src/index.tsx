// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Ensure you have a div with id='root' in your public/index.html file
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  console.error('Failed to find the root element');
}
