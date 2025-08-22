import React from "react";

const Cart = () => {
    return (
        <>  
        <div className="container mt-5 mb-5">
            <div className="text-center mb-4">
                <h2 className="section-title  mb-4">Giỏ hàng của bạn</h2>
            </div>
            
            <div className="card shadow p-4">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <img src="/source/eat.png" alt="Sản phẩm" className="w-100 rounded" />
                    </div>
                    <div className="col-md-6">
                        <h5>Hạt nhập khẩu cho chó, mèo</h5>
                        <p className="mb-1">Giá: <span className="fw-bold text-danger">135.000đ</span></p>
                        <p className="mb-1">Số lượng: <span className="fw-bold">1</span></p>
                    </div>
                    <div className="col-md-4 text-end">
                        <button className="btn btn-danger">Xóa</button>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Tổng tiền:</span>
                    <span className="fw-bold text-danger fs-5">135.000đ</span>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary px-5 py-2">Thanh toán</button>
                </div>
            </div>
        </div></>
        
    );
};

export default Cart;