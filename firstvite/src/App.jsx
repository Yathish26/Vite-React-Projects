import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './First';
import Second from './Second';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/second" element={<Second />} />
                <Route path="/" element={<First />} />
            </Routes>
        </Router>
    );
}

export default App;
