import React from "react";

const Pay = () => {
  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="text_pro">
        <p>
          Trang chủ / <span className="text-secondary"> Thanh toán </span>
        </p>
      </div>

      <div className="container mt-4">
        <div className="row">
          {/* Thông tin nhận hàng */}
          <div className="col-lg-4">
            <div className="section-box">
              <h6 className="fw-bold mb-3">Thông tin nhận hàng</h6>
              <form>
                <input
                  type="email"
                  className="pay-form-control mb-2"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="pay-form-control mb-2"
                  placeholder="Họ và tên"
                />
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="pay-form-controlvn"
                    placeholder="Số điện thoại (tuỳ chọn)"
                  />
                  <span className="input-group-text p-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                      width="30"
                      alt="VN flag"
                    />
                  </span>
                </div>
                <input
                  type="text"
                  className="pay-form-control mb-2"
                  placeholder="Địa chỉ (tuỳ chọn)"
                />
                <select className="form-select mb-2">
                  <option>Tỉnh thành</option>
                </select>
                <select className="form-select mb-2" disabled>
                  <option>Quận huyện (tuỳ chọn)</option>
                </select>
                <select className="form-select mb-2" disabled>
                  <option>Phường xã (tuỳ chọn)</option>
                </select>
                <textarea
                  className="pay-form-control"
                  rows="3"
                  placeholder="Ghi chú (tuỳ chọn)"
                ></textarea>
              </form>
            </div>
          </div>

          {/* Vận chuyển + Thanh toán */}
          <div className="col-lg-4">
            {/* Vận chuyển */}
            <div className="section-box mb-3">
              <h6 className="fw-bold mb-3">Vận chuyển</h6>
              <div className="alert alert-info mb-0">
                Vui lòng nhập thông tin giao hàng
              </div>
            </div>

            {/* Thanh toán */}
            <div className="section-box">
              <h6 className="fw-bold mb-3">Thanh toán</h6>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="bank"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="bank">
                  Chuyển khoản
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="payment"
                  id="cod"
                />
                <label className="form-check-label" htmlFor="cod">
                  Thu hộ (COD)
                </label>
              </div>
            </div>
          </div>

          {/* Đơn hàng */}
          <div className="col-lg-4">
            <div className="section-box">
              <h6 className="fw-bold">Đơn hàng (1 sản phẩm)</h6>
              <div className="d-flex align-items-start my-3">
                <img
                  src="/source/anhcat.png"
                  className="me-2 rounded"
                  style={{ width: "60px", height: "auto" }}
                  alt="product"
                />
                <div>
                  <div> Cát nhập khẩu của mèo </div>
                  <div className="text-end text-danger">360.000đ</div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập mã giảm giá"
                />
                <button className="btn btn-primary">Áp dụng</button>
              </div>

              <ul className="list-unstyled small">
                <li className="d-flex justify-content-between">
                  <span>Tạm tính</span>
                  <strong>360.000đ</strong>
                </li>
                <li className="d-flex justify-content-between">
                  <span>Phí vận chuyển</span>
                  <span>-</span>
                </li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Tổng cộng</span>
                <span className="text-primary">360.000đ</span>
              </div>

              <div className="mt-2">
                <a href="/cart" className="text-decoration-none small text-primary">
                  &lt; Quay về giỏ hàng
                </a>
              </div>
              <div className="mt-3 d-grid">
                <button className="btn btn-primary">ĐẶT HÀNG</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;

