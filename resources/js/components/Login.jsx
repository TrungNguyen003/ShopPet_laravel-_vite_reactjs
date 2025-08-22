import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("auth_token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/dashboard");
            } else {
                if (data.errors) {
                    setErrors(data.errors);
                } else if (data.message) {
                    setErrors({ email: [data.message] });
                }
            }
        } catch (error) {
            setErrors({ general: ["Đã có lỗi xảy ra. Vui lòng thử lại."] });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100 ">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-lg border-0 rounded-3">
                    <div className="card-body p-4">
                        <h3 className="text-center mb-4 fw-bold">Đăng nhập</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control ${
                                        errors.email ? "is-invalid" : ""
                                    }`}
                                    placeholder="Nhập email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email[0]}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`form-control ${
                                        errors.password ? "is-invalid" : ""
                                    }`}
                                    placeholder="Nhập mật khẩu"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password[0]}
                                    </div>
                                )}
                            </div>

                            {errors.general && (
                                <div className="alert alert-danger text-center py-2">
                                    {errors.general[0]}
                                </div>
                            )}

                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Đang đăng nhập..."
                                        : "Đăng nhập"}
                                </button>
                            </div>

                            <div className="text-center mt-3">
                                <Link
                                    to="/register"
                                    className="text-decoration-none"
                                >
                                    Chưa có tài khoản?{" "}
                                    <span className="fw-semibold">Đăng ký</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
