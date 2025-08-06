import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importing React Router components

const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand" href="/">🐶 Shop Pet</a>

                {/* Toggle button for mobile view */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Trang chủ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Sản phẩm</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Giới thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Liên hệ</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-success ms-lg-3" href="/login">Đăng nhập</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
