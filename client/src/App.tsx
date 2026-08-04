import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { PortfolioHome } from './pages/PortfolioHome/PortfolioHome';

export default function App() {
  return (
    <div>

      <Helmet>
        <title>Utkarsh Portfolio</title>
        <meta
          name="description"
          content="Premium MERN portfolio with glassmorphism UI, smooth animations, and admin dashboard."
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<PortfolioHome />} />
      </Routes>

    </div>
  );
}

