const Login = () => {
    return (
        <>
            <div className="container bg-login mt-3">
                <div className="row mb-3">
                    {/* Cột ảnh */}
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div>
                            <img src="/source/anhlogin.png" alt="Login Banner" className="p-5 w-100" />
                        </div>
                    </div>

                    {/* Cột form */}
                    <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
                        <div className="w-100">
                            <div className="text-center mt-3 text-login">
                                <h1><b>DoDu Pets</b></h1>
                                <h2 className="mt-4">Đăng nhập tài khoản</h2>
                            </div>

                            {/* Form đăng nhập */}
                            <form className="mt-4 px-5">
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control p-3"
                                        placeholder="Nhập email:"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        className="form-control p-3"
                                        placeholder="Nhập mật khẩu:"
                                    />
                                </div>

                                <div className="d-flex justify-content-end mb-3">
                                    <a href="#" className="text-decoration-none">Quên mật khẩu</a>
                                </div>

                                <div className="d-grid gap-2">
                                    <div className="color-button d-grid gap-2 mb-3">
                                        <button type="submit" className="btn  p-2 text-white">
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <button type="button" className="btn btn-secondary p-2">
                                        Đăng kí
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login ;
