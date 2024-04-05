// App.tsx

import React from 'react';
// import { redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';

// import ProtectedDashboardPage from './pages/ProtectedDashboardPage';

// const isAuthenticated = true; // Check if user is authenticated

const App: React.FC = () => {
<>HomePage</>

  return (
    <div>
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/*" element={<SignUpPage />} />

    </Routes>
    </Router >
    </div>
    );
};

export default App;
