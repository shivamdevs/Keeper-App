import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import KeepLayout from './layout/KeepLayout';

function App() {
    return (
        <Routes>
            <Route path="/keeper/*" element={<KeepLayout />} />
            <Route path="/" element={<Navigate to="keeper" />} />
        </Routes>
    );
}

export default App;