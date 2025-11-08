import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>The WokxStation | Work Anywhere, Grow Everywhere</title>
        <meta name="description" content="Hands-on training for remote work — and direct access to companies hiring remote talent." />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);
