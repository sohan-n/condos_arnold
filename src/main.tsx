import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CondoPage from './pages/CondoPage';
import ExploreJacoPage from './pages/ExploreJacoPage';
import AboutPage from './pages/AboutPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/condos_arnold">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/condos" element={<CondoPage />} />
          <Route path="/explore" element={<ExploreJacoPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes here for about, etc. */}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
