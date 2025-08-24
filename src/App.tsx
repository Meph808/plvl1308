import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormBuilderPage from './components/Builder';

function App() {
  return (
    <div className="container">
      <header>
        <h1>ООО "ДиджиталСП"</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormBuilderPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;