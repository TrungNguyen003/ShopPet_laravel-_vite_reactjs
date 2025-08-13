import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const [showSearch, setShowSearch] = useState(false);
    // Hàm kiểm tra active
    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header className="sticky-top">
            {/* Overlay search input trên mobile */}
            {showSearch && (
                <div
                    className="search-overlay position-fixed top-0 start-0 w-100 p-2 bg-white shadow"
                    style={{ zIndex: 1051 }}
                >
                    <form
                        className="d-flex"
                        role="search"
                        onSubmit={() => setShowSearch(false)}
                    >
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Tìm thú cưng, thức ăn..."
                            aria-label="Search"
                            name="q"
                            autoFocus
                        />
                        <button className="btn btn_search ms-2" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => setShowSearch(false)}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </form>
                </div>
            )}

            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container">
                    {/* Logo bên trái */}
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        to="/"
                        aria-label="Shop Pet - Trang chủ"
                    >
                        <i className="bi bi-paw me-2 fs-4"></i>
                        <img
                            src="/source/image/logo/logo.png"
                            alt="Logo"
                            style={{ height: 80 }}
                            className="logo-shadow"
                        />
                    </Link>

                    {/* Nút toggle mobile */}
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Menu chính căn giữa */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-lg-1">
                                <Link
                                    className={`nav-link px-3 py-2 rounded${
                                        isActive("/") ? " active" : ""
                                    }`}
                                    to="/"
                                >
                                    <i className="bi bi-house-door me-1"></i>{" "}
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-lg-1">
                                <Link
                                    className={`nav-link dropdown-toggle px-3 py-2 rounded${
                                        isActive("/products") ? " active" : ""
                                    }`}
                                    to="/products"
                                    id="productsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-shop me-1"></i> Sản phẩm
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="productsDropdown"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/dogs"
                                        >
                                            <i className="bi bi-egg-fill me-2"></i>
                                            Cho chó
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/cats"
                                        >
                                            <i className="bi bi-stars me-2"></i>
                                            Cho mèo
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products"
                                        >
                                            <i className="bi bi-grid me-2"></i>
                                            Tất cả sản phẩm
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-lg-1">
                                <Link
                                    className={`nav-link px-3 py-2 rounded${
                                        isActive("/about") ? " active" : ""
                                    }`}
                                    to="/about"
                                >
                                    <i className="bi bi-info-circle me-1"></i>{" "}
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-1">
                                <Link
                                    className={`nav-link px-3 py-2 rounded${
                                        isActive("/contact") ? " active" : ""
                                    }`}
                                    to="/contact"
                                >
                                    <i className="bi bi-telephone me-1"></i>{" "}
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>

                        {/* Thanh tìm kiếm và icon bên phải */}
                        <div className="d-flex align-items-center ms-lg-3 gap-2">
                            {/* Icon search hiện trên mọi màn hình */}
                            <button
                                className="btn btn_icon d-flex align-items-center justify-content-center"
                                type="button"
                                onClick={() => setShowSearch(true)}
                            >
                                <i className="bi bi-search"></i>
                            </button>
                            <Link
                                to="/cart"
                                className="btn btn_icon position-relative d-flex align-items-center justify-content-center"
                            >
                                <i className="bi bi-cart3"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    3
                                </span>
                            </Link>
                            <Link
                                to="/account"
                                className="btn btn_icon d-flex align-items-center justify-content-center"
                            >
                                <i className="bi bi-person"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
