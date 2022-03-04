import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard } from '@pages/Dashboard/Dashboard';
import { LandingPage } from '@pages/LandingPage/LandingPage';
import { UserProfile } from '@pages/UserProfile/UserProfile';
import { Navbar } from '@components/layouts/Navbar/Navbar';

export const AppRoutes = () => {
    return (
        <div className="AppRouter">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </Router>
        </div>
    )
};
