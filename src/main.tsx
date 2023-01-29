import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DocsPage from './pages/DocsPage';
import DownloadsPage from './pages/DownloadsPage';
import ErrorPage from './pages/ErrorPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/random-browser-page' element={<App />} />
                <Route path='/random-browser-page/docs' element={<DocsPage />} />
                <Route path='/random-browser-page/downloads' element={<DownloadsPage />} />
                <Route path='/random-browser-page/*' element={<ErrorPage message='Not Found' status={404} link='/random-browser-page' linkText='Go back to Main Page' />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
