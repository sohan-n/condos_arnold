import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CondoPage from './pages/CondoPage';
import JacoPage from './pages/ExploreJacoPage';
import ContactPage from './pages/ContactPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/condo" element={<CondoPage />} />
          <Route path="/jaco" element={<JacoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes here for about, etc. */}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
