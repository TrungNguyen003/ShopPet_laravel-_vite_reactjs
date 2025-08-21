
const Detail = () => {
    return (
        <>
            <div className="container p-5">
                <div className="row">
                    {/* Ảnh sản phẩm */}
                    <div className="col-sm-12 col-md-6 text-center">
                        <img
                            src="/source/anhcat.png"
                            alt="Cát đậu nành PetHaven"
                            className="img-fluid"
                        />
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="col-sm-12 col-md-6">
                        <h3> Cát đậu nành PetHaven mùi Trà Xanh </h3>
                        <p className="text-muted">Phân Loại: Cát vệ sinh cho mèo</p>

                        <div className="mb-3">
                            <span className="text-warning">★ 5</span>
                            <span className="text-muted"> (0 reviews)</span>
                        </div>

                        <h2 className="text-danger fw-bold">110,000đ</h2>

                        <button className="btn btn-size">2,5kg</button>

                        {/* Số lượng */}
                        <div className="mt-3">
                            <p className="fw-bold mb-1">Số lượng</p>
                            <div className="d-flex align-items-center">
                                <button className="btn btn-outline-dark">-</button>
                                <input
                                    type="text"
                                    value="1"
                                    readOnly
                                    className="form-control text-center mx-2"
                                    style={{ width: "60px" }}
                                />
                                <button className="btn btn-outline-dark">+</button>
                            </div>
                        </div>

                        {/* Nút hành động */}
                        <div className="d-flex gap-3 mt-4">
                            <button className="btn-custom">
                                <i className="bi bi-cart3"></i> Thêm Vào Giỏ Hàng
                            </button>
                            <button className="btn-custom">Mua Ngay</button>
                        </div>
                    </div>
                </div>

                {/* Tab chi tiết và đánh giá */}
               
            </div>
        </>
    );
};

export default Detail;
