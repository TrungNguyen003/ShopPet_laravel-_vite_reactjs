import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importing React Router components
import Header from './components/header';
import Footer from './components/footer';
import Home from './router/Home';
import About from './router/About';
import Introduce from './router/introduce';
import News from './router/news';
import Detailnew from './router/detailnew'; // Importing the Detailnew component
import Login from './router/login';
import Detailproduct from './router/detailproduct';
import Detail from './router/detail';

const App = () => (
    // Bao bọc ứng dụng trong BrowserRouter để kích hoạt định tuyến
    <BrowserRouter>
        <Header />
        {/* Dịnh tuyến cơ bản */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/news" element={<News />} />
            <Route path="/detailnew" element={<Detailnew />} />
            <Route path="/detailproduct" element={<Detailproduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);


// Tạo root và render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
