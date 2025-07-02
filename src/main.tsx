import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CondoPage from './pages/CondoPage';
import JacoPage from './pages/ExploreJacoPage';
import AboutPage from './pages/AboutPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/condo" element={<CondoPage />} />
          <Route path="/jaco" element={<JacoPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes here for about, etc. */}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
