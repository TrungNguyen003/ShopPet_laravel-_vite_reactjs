import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="hero-section">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-5">
                        <div className="d-flex flex-column justify-content-center  h-100">
                            <h1 className="display-4 fw-bold title-hero">
                                Enjoy Your Holiday
                            </h1>
                            <p className="lead">
                                Shop Pet - Nơi tốt nhất cho thú cưng của bạn
                            </p>
                            <div className="d-flex">
                                <div className="w-25 icon-hero ">
                                    <img
                                        src="/source/image/icon/cat-food.png"
                                        alt=""
                                        className="w-100"
                                    />
                                </div>
                                <div className="w-75 ">
                                    <p className="mx-3">Cat Food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="hero-image d-flex justify-content-end align-items-end h-100">
                            <img
                                src="/source/image/home/hero_image_01.png"
                                alt="Hero"
                                className="w-100 h-100 object-fit-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
