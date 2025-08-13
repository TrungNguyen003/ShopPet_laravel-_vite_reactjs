import React from 'react';


const Footer = () => (
    <footer>
        <div className=" color-footer ">
            <div className='container'>
                <div className='row '>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <div className='d-flex align-items-center'>
                            <img src="../source/anhheader.png" alt="Logo" className='logo me-2' />
                            <span className='fw-bold text-shop'>DoDu Pets</span>
                        </div>
                        <div className='text-footer'>
                            <p>Công ty DoDu Pets cung cấp đa dạng các sản phẩm
                                chăm sóc thú cưng: thức ăn, cát vệ sinh,
                                phụ kiện cho chó mèo.</p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <div className="footer-section mt-4">
                            <h5 className='text-document'>Hỗ trợ khách hàng</h5>
                            <ul>
                                <li><a href="#" className='text-decoration-none text-dark'>Chính sách thanh toán</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Chính sách đổi trả hàng</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Chính sách bảo mật</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Chính sách hoàn tiền</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Phương thức vận chuyển</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-2'>
                        <div className="footer-section mt-4">
                            <h5 className='text-document'>DoDu Pets</h5>
                            <ul>
                                <li><a href="#" className='text-decoration-none text-dark'>Trang chủ</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Giới thiệu</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Sản phẩm</a></li>
                                <li><a href="#" className='text-decoration-none text-dark'>Tin tức</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-4'>
                        <div className="footer-section1 mt-4">
                            <h5 className='text-document'>THÔNG TIN LIÊN HỆ</h5>
                            <ul>
                            <li>Bạn có thể liên hệ cho chúng tôi qua các phương thức sau.</li>
                            <li>Địa Chỉ: Ngách 140/30 Đông Thiên, Hà Nội.</li>
                            <li>Điện Thoại: 0901255589</li>
                            <li>Email: DoDu.vn@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);


export default Footer;