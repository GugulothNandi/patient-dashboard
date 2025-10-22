import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopNav />
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
