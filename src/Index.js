import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// Create a root for React 18+ concurrent mode
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);