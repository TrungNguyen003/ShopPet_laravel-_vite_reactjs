import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="bg-header">
                <div className="container">
                    <div className="text-nav banner-text d-flex justify-content-center flex-column  text-white text-shadow-dark">
                        <span>
                            Cung cấp cho thú cưng của bạn,
                        </span>
                        <span className="fw-bold text-nav">
                            thức ăn nhai tự nhiên <br></br> và lành mạnh
                        </span>
                        <div className="mt-5 view-product">
                            <h5 className="text-center">Xem sản phẩm</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="mt-4">
                        <div className="text-center">
                            <h2> DoDu Pets</h2>
                        </div>
                        <div className="text-center ">
                            <h5>Chúng tôi sở hữu các sản phẩm chất lượng cao trong danh mục sản phẩm <br /> của mình và
                                là công ty nội địa đầu tiên sử dụng thịt làm thực phẩm cho chó để sản<br /> xuất thức ăn thô.
                                Ngoài ra, chúng tôi còn sản xuất thức ăn chế biến sẵn và <br />thức ăn nhai cho chó. Chúng tôi
                                cũng có thức ăn cho mèo chất  lượng cao trong<br /> danh mục sản phẩm của mình.</h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className=" mt-4">
                       <img src="/source/anhpet.png" alt="Banner" className="img-pet " />
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="text-center mt-3">
                    <h2 className=" section-title">Danh mục sản phẩm</h2>
                </div>
                <div className="row mt-4 ">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="">
                            <img src="/source/cat.png" alt="Banner" className="img-teritory" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="">
                            <img src="/source/dog.png" alt="Banner" className="img-teritory" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="">
                            <img src="/source/catdog.png" alt="Banner" className="img-teritory" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="">
                            <img src="/source/spare.png" alt="Banner" className="img-teritory" />
                        </div>
                    </div>
                </div>
                <div className=" row mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <img src="/source/anh4.png" alt="Banner" className="img-teritory mt-5" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <img src="/source/anh5.png" alt="Banner" className="img-teritory mt-2" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <img src="/source/anh6.png" alt="Banner" className="img-teritory mt-5" />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center mt-5">
                    <h2 className=" section-title">Sản phẩm được yêu thích nhất</h2>
                </div>
            </div>
            <div className="color-product">
                <div className=" container">
                    <div className="row mt-4 ">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="Banner" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="Banner" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="Banner" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="Banner" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-3">
                <div className="row bg-pet" >
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="p-5">
                            <h3>Chúng tôi luôn mang lại những sản phẩm tốt nhất cho <br /> thú cưng của bạn !</h3>
                            <p>Chất lượng cao, an toàn: Sản phẩm tại PetHaven đều được kiểm  định chặt chẽ, an toàn và <br /> phù hợp cho sức khỏe thú cưng.</p>
                            <p>Thức ăn ngon, dinh dưỡng: Thức ăn đa dạng, chuẩn vị tự nhiên,  hấp dẫn khẩu vị và đảm bảo <br /> dinh dưỡng cho thú cưng.</p>
                            <p> Thân thiện với môi trường: Sản phẩm được thiết kế để bảo vệ môi  trường, từ bao bì <br /> đến các vật dụng vệ sinh.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="p-5">
                            <img src="/source/anh7.png" alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="text-center mt-3">
                        <h2 className=" section-title">Sản phẩm được yêu thích nhất</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/eat.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Hạt nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/anh3.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Cát nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/anh3.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Cát nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/anh3.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Cát nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="p-3 mt-3 mb-3 product-pet">
                                <div className="bg-product p-4 ">
                                    <img src="/source/anh3.png" alt="" className="w-100" />
                                    <div className="mt-3">
                                        <h4> Cát nhập khẩu cho chó, mèo </h4>
                                        <div className="d-flex  align-items-center justify-content-between">
                                            <h4 className="money"> 135.000đ</h4>
                                            <i className="bi bi-cart3 fs-5"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="text-center mt-3">
                    <h2 className=" section-title">Tin tức & kinh nghiệm  </h2>
                </div>
                <div className="row mt-4 mb-5">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="text-news">
                            <img src="/source/anh8.png" alt="" className="w-100 text-news" />
                            <h5 className="p-3">Cách chăm sóc thú cưng của mình khi bị ốm, và cách sơ cứu,..</h5>
                            <div className="text-center">
                                <div className="button-detail mb-3  ">
                                    <h5 className="mt-1">Xem chi tiết</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="text-news">
                            <img src="/source/anh8.png" alt="" className="w-100 text-news" />
                            <h5 className="p-3">Cách chăm sóc thú cưng của mình khi bị ốm, và cách sơ cứu,..</h5>
                            <div className="text-center">
                                <div className="button-detail mb-3  ">
                                    <h5 className="mt-1">Xem chi tiết</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="text-news">
                            <img src="/source/anh8.png" alt="" className="w-100 text-news" />
                            <h5 className="p-3">Cách chăm sóc thú cưng của mình khi bị ốm, và cách sơ cứu,..</h5>
                            <div className="text-center">
                                <div className="button-detail mb-3  ">
                                    <h5 className="mt-1">Xem chi tiết</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="text-news">
                            <img src="/source/anh8.png" alt="" className="w-100 text-news" />
                            <h5 className="p-3">Cách chăm sóc thú cưng của mình khi bị ốm, và cách sơ cứu,..</h5>
                            <div className="text-center">
                                <div className="button-detail mb-3  ">
                                    <h5 className="mt-1">Xem chi tiết</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};       
export default Home;