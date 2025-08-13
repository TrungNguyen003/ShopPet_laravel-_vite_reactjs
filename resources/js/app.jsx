import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importing React Router components
import Header from './components/header';
import Footer from './components/footer';
import Home from './router/Home';
import About from './router/About';


const App = () => (
    // Bao bọc ứng dụng trong BrowserRouter để kích hoạt định tuyến
    <BrowserRouter>
        <Header />
        {/* Dịnh tuyến cơ bản */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);


// Tạo root và render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
