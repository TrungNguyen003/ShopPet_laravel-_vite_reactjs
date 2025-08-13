import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



const Home = () => {
    return (
        <>
            <div className="bg-header">
                <div className="container ">
                    <p className="banner-text d-flex justify-content-center flex-column">
                        Cung cấp cho thú cưng của bạn, <br />
                        <strong >thức ăn nhai tự nhiên
                        và lành mạnh</strong>
                    </p>
                </div>
            </div>
        </>
    );
};


export default Home;