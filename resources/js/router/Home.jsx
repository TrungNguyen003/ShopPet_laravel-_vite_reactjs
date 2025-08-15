import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <section className=" background-hero">
                <div className="hero-section">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-12 col-lg-5 ">
                                <div className="d-flex flex-column justify-content-center w-100  h-100">
                                    <h1 className="display-4 fw-bold title-hero">
                                        Enjoy Your{" "}
                                        <span className="text-dark">
                                            Holiday
                                        </span>
                                    </h1>
                                    <p className="lead">
                                        Shop Pet - Nơi tốt nhất cho thú cưng của
                                        bạn
                                    </p>
                                    <div
                                        className="slider mb-3"
                                        style={{ minWidth: 0 }}
                                    >
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            loop={true}
                                            autoplay={{ delay: 3000 }}
                                            pagination={{ clickable: true }}
                                            modules={[Pagination]}
                                            style={{ width: "100%" }}
                                            breakpoints={{
                                                576: { slidesPerView: 1 },
                                                768: { slidesPerView: 1 },
                                                992: { slidesPerView: 1 },
                                            }}
                                        >
                                            <SwiperSlide>
                                                <div className="d-flex">
                                                    <div className="icon-hero ">
                                                        <img
                                                            src="/source/image/icon/cat-food.png"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </div>
                                                    <div className="slide-hero ">
                                                        <p className="mx-3 title-slide">
                                                            Cat Food
                                                        </p>
                                                        <p className="mx-3 description-slide">
                                                            Short term and long
                                                            term pet board.
                                                            Luxury dog kennels,
                                                            exercise.
                                                        </p>
                                                    </div>
                                                </div>{" "}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="d-flex">
                                                    <div className="icon-hero ">
                                                        <img
                                                            src="/source/image/icon/cat-food.png"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </div>
                                                    <div className="slide-hero ">
                                                        <p className="mx-3 title-slide">
                                                            Dog Food
                                                        </p>
                                                        <p className="mx-3 description-slide">
                                                            Short term and long
                                                            term pet board.
                                                            Luxury dog kennels,
                                                            exercise.
                                                        </p>
                                                    </div>
                                                </div>{" "}
                                                <p>&nbsp;</p>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <div className="pb-4">
                                        <div className="book-now">
                                            <a href="#">
                                                <img
                                                    src="/source/image/icon/booknow.png"
                                                    alt=""
                                                    className="w-50"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 ">
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
                </div>
            </section>

            {/* Happy */}
            <section>
                <div className="happy">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="happy-image">
                                <div className="happy-image-content">
                                    <img
                                        src="/source/image/home/hero_image_02.png"
                                        alt="Happy Pet"
                                        className="w-100"
                                    />
                                </div>
                                <div className="water-image">
                                    <img
                                        src="/source/image/icon/water.png"
                                        alt="Happy Pet"
                                        className="w-100"
                                    />
                                </div>
                                <div className="yarn-ball">
                                    <img
                                        src="/source/image/icon/yarn-ball.png"
                                        alt="Yarn Ball"
                                        className="w-100"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="text-happy w-100 h-100 d-flex flex-column justify-content-center ">
                                <h2 className="title-happy w-75 mx-auto">
                                    Chúng ta có thể giữ{" "}
                                    <span className="text-dark">
                                        cho họ hạnh phúc
                                    </span>
                                </h2>
                                <div className="description-happy w-75 mx-auto">
                                    <p className=" ">
                                        Từ lúc bạn bè chúng ta đánh hơi đường
                                        vào cửa vào buổi sáng cho đến khi chúng
                                        vẫy cái đuôi mệt mỏi nhưng thỏa mãn vào
                                        buổi chiều, chúng ta hãy chiều theo bản
                                        chất của chúng.
                                    </p>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mt-3 w-75 mx-auto">
                                    <a
                                        href="#"
                                        className="text-decoration-none  text-white btn-booknow "
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="danh-muc">
                <div className="container">
                    <div>
                        <h2 className="text-center title-danh-muc">
                            <span className="text-dark"> Danh mục</span> sản
                            phẩm
                        </h2>
                    </div>
                    <div className="line-icon d-flex justify-content-center align-items-center">
                        <div className="line-right d-flex justify-content-end "></div>
                        <div className="icon-logo">
                            <img
                                src="/source/image/logo/logo.png"
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="line-left"></div>
                    </div>
                    <div
                        className="danh-muc-content h-100 w-100"
                        style={{ minWidth: 0 }}
                    >
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            style={{ width: "100%", padding: "20px 0" }}
                            breakpoints={{
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 4 },
                            }}
                        >
                            <SwiperSlide>
                                <div class="content__item">
                                    <button
                                        className="button button--janus"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        <span>
                                            {isHovered
                                                ? "Đã đổi nội dung!"
                                                : "Reshape"}
                                        </span>
                                    </button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
