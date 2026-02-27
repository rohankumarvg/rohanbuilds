import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ background: '#0a0a0f', color: '#e4e4e7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
      <h1>rohanbuilds.com - coming soon</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
