import React from 'react';
const Header = () => (
    <header>
        <div className='color-header'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <img src="../source/anhheader.png" alt="Logo" className='logo me-2' />
                        <span className='fw-bold text-shop'>DoDu Pets</span>
                    </div>
                    <nav className='d-flex gap-4'>
                        <a className='text-decoration-none text-dark text-title' href="#">Home</a>
                        <a className='text-decoration-none text-dark text-title' href="#">Giới thiệu</a>
                        <a className='text-decoration-none text-dark text-title' href="#">Sản phẩm</a>
                        <a className='text-decoration-none text-dark text-title' href="#">Tin tức</a>
                    </nav>
                    <div className='d-flex align-items-center gap-3'>
                        <div className='d-flex align-items-center p-2 rounded-pill bg-light'>
                            <i className="bi bi-telephone-fill me-1"></i>
                            <span>0867545657</span>
                        </div>
                        <a href="/cart" className='text-decoration-none text-dark'>
                          <i className="bi bi-cart3 fs-5"> </i>  
                          <span class="position-absolute  translate-middle badge rounded-pill bg-danger">3</span>
                        </a>
                        
                        <i className="bi bi-search fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className=''> 

        </div>
    </header>
);

export default Header;
