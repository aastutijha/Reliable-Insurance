// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import App from './App';
import SignUpForm from './component/AgentSignup/signupagent';
import BlogDetails from './component/BlogSection/blogdetails'
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signupagent" element={<SignUpForm />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);