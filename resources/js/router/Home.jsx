import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
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

                                    <div>
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
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="happy-image">
                                <img
                                    src="/source/image/home/hero_image_02.png"
                                    alt="Happy Pet"
                                    className="w-100"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <h2 className="title-happy">
                                Happy Pet, Happy You
                            </h2>
                            <p className="description-happy">
                                Chúng tôi cung cấp dịch vụ chăm sóc thú cưng
                                chuyên nghiệp và tận tâm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
