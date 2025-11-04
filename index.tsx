import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudyPage from './pages/StudyPage';
import { sections } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {sections.map((section) => (
          <Route
            key={section.id}
            path={`/study/${section.id}`}
            element={<StudyPage />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
