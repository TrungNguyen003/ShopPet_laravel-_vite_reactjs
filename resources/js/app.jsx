import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Importing React Router components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./router/Home";
import About from "./router/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const App = () => (
    // Bao bọc ứng dụng trong BrowserRouter để kích hoạt định tuyến
    <BrowserRouter>
        <Header />
        {/* Dịnh tuyến cơ bản */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);

// Tạo root và render ứng dụng
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
