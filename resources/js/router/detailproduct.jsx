import React from "react";
const Detailnew = () => {
    return (
        <>
            <div className="container " >
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="text-center mt-5">
                            <h3>Danh mục sản phẩm</h3>
                        </div>

                        <div className="mt-4">
                            {/* Sản phẩm cho mèo */}
                            <p>
                                <a className="d-flex justify-content-between align-items-center text-color  text-decoration-none"
                                    data-bs-toggle="collapse" href="#catProducts" role="button" aria-expanded="false">
                                    Sản phẩm cho mèo
                                    <i className="bi bi-caret-down-fill"></i>
                                </a>
                            </p>
                            <div className="collapse ps-3" id="catProducts">
                                <p >Thức ăn hạt cho mèo</p>
                                <p>Cát vệ sinh cho mèo</p>
                                <p>Pate cho mèo</p>
                            </div>

                            <hr />

                            {/* Sản phẩm cho chó */}
                            <p>
                                <a className="d-flex justify-content-between align-items-center text-color text-decoration-none"
                                    data-bs-toggle="collapse" href="#dogProducts" role="button" aria-expanded="false">
                                    Sản phẩm cho chó
                                    <i className="bi bi-caret-down-fill"></i>
                                </a>
                            </p>
                            <div className="collapse ps-3" id="dogProducts">
                                <p>Thức ăn cho chó</p>
                            </div>

                            <hr />

                            {/* Sản phẩm chăm sóc sức khỏe */}
                            <p>
                                <a className="d-flex justify-content-between align-items-center text-color  text-decoration-none"
                                    data-bs-toggle="collapse" href="#healthProducts" role="button" aria-expanded="false">
                                    Sản phẩm chăm sóc sức khỏe
                                    <i className="bi bi-caret-down-fill"></i>
                                </a>
                            </p>
                            <div className="collapse ps-3" id="healthProducts">
                                <p>Sữa tắm cho chó mèo</p>
                            </div>
                            <hr />
                            {/* Phụ kiện */}
                            <p>
                                <a className="d-flex justify-content-between align-items-center text-color  text-decoration-none"
                                    data-bs-toggle="collapse" href="#accessories" role="button" aria-expanded="false">
                                    Phụ kiện
                                    <i className="bi bi-caret-down-fill"></i>
                                </a>
                            </p>
                            <div className="collapse ps-3" id="accessories">
                                <p>Phụ kiện cho mèo</p>
                                <p>Phụ kiện cho chó</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="text-center ">
                            <h2 className=" section-title"> Sản phẩm</h2>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="p-3 mt-3 mb-3 product-pet">
                                    <div className="bg-product p-4 ">
                                        <img src="/source/anh3.png" alt="" className="w-100" />
                                        <div className="mt-3">
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
                                                <i className="bi bi-cart3 fs-5"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4 ">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="p-3 mt-3 mb-3">
                                    <div className="item-product p-4 ">
                                        <img src="/source/eat.png" alt="Banner" className="w-100" />
                                        <div className="mt-3">
                                            <h5> Hạt nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
                                                <i className="bi bi-cart3 fs-5"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="p-3 mt-3 mb-3">
                                    <div className="item-product p-4 ">
                                        <img src="/source/eat.png" alt="Banner" className="w-100" />
                                        <div className="mt-3">
                                            <h5> Hạt nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
                                                <i className="bi bi-cart3 fs-5"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="p-3 mt-3 mb-3">
                                    <div className="item-product p-4 ">
                                        <img src="/source/eat.png" alt="Banner" className="w-100" />
                                        <div className="mt-3">
                                            <h5> Hạt nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
                                                <i className="bi bi-cart3 fs-5"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="p-3 mt-3 mb-3">
                                    <div className="item-product p-4 ">
                                        <img src="/source/eat.png" alt="Banner" className="w-100" />
                                        <div className="mt-3">
                                            <h5> Hạt nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
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
                                            <h5> Cát nhập khẩu cho chó, mèo </h5>
                                            <div className="d-flex  align-items-center justify-content-between">
                                                <h5 className="money"> 135.000đ</h5>
                                                <i className="bi bi-cart3 fs-5"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
export default Detailnew;