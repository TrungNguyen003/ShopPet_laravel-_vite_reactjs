import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const introduce = () => {
    return (

        <>

            <div className="text-center p-4">
                <h2 className=" section-title"> Giới Thiệu </h2>
            </div>
            <div className="container bg-like-pet ">
                <div className="row ">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className=" text-end">
                            <h4>Cung Cấp Sản Phẩm Với <br /> Mức Giá Phải Chăng</h4>
                            <p className="text-end">Ngoài các yếu tố về chất lượng sản phẩm cửa hàng uy <br /> tín, chuyên nghiệp cần mang đến sản phẩm với mức <br /> giá cả phải chăng đến khách hàng.</p>
                        </div>
                        <div className="text-end">
                            <h4>Nhân Viên Tư Vấn Nhiệt <br /> Tình, Am Hiểu Thú Cưng</h4>
                            <p className="text-end">Bên cạch các sản phẩm cung cấp đến khách hàng bạn <br /> có thể căn cứ vào thái độ của nhân viên để đánh giá <br /> cửa hàng uy tín.</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <img src="/source/imgpet.png" alt="" className=" w-100 like-pet" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className=" ">
                            <h4>Cung Cấp Sản Phẩm Với <br /> Mức Giá Phải Chăng</h4>
                            <p className="text-start">Ngoài các yếu tố về chất lượng sản phẩm cửa hàng uy <br /> tín, chuyên nghiệp cần mang đến sản phẩm với mức <br /> giá cả phải chăng đến khách hàng.</p>
                        </div>
                        <div className="">
                            <h4>Nhân Viên Tư Vấn Nhiệt <br /> Tình, Am Hiểu Thú Cưng</h4>
                            <p className="text-start">Bên cạch các sản phẩm cung cấp đến khách hàng bạn <br /> có thể căn cứ vào thái độ của nhân viên để đánh giá <br /> cửa hàng uy tín.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="text-main p-4">
                    <div className="text-center" >
                        <h4>Câu chuyện của chúng tôi </h4>
                    </div>
                    <h5>DoDu Pets - Niềm Tin Cho Pets, An Tâm Cho Bạn</h5>
                    <p>Tại DoDu Pets.vn, chúng tôi hiểu rằng thú cưng không chỉ là những người bạn nhỏ mà còn là thành viên quan trọng của gia đình bạn.
                        Chính vì vậy, chúng tôi luôn nỗ lực mang đến những sản phẩm chăm sóc thú cưng tốt nhất, giúp đảm bảo sức khỏe và niềm vui cho
                        thú cưng của bạn mỗi ngày. Với phương châm "Niềm tin cho Pets, an tâm cho bạn", DoDu Pets cam kết trở thành người bạn đồng
                        hành đáng tin cậy của các chủ nuôi thú cưng trên toàn quốc.</p>
                    <h5>Nhiệm Vụ Của DoDu Pets</h5>
                    <p>DoDu Pets không chỉ đơn thuần là một cửa hàng cung cấp sản phẩm cho thú cưng, mà còn là nơi mà chúng tôi đặt trái tim và tâm huyết vào việc chăm sóc sức khỏe và hạnh phúc của các thú cưng. Nhiệm vụ của chúng tôi là:
                        Cung cấp các sản phẩm chất lượng cao: Tất cả các sản phẩm tại PetHaven, từ thức ăn, cát vệ sinh cho mèo, đến các phụ kiện, đồ chơi đều được chọn lọc kỹ lưỡng từ những thương hiệu uy tín trên thế giới. Chúng tôi cam kết chỉ cung cấp những sản phẩm an toàn, chất lượng cao và thân thiện với sức khỏe của thú cưng.
                        Hỗ trợ kiến thức chăm sóc thú cưng: Chúng tôi không chỉ cung cấp sản phẩm mà còn cung cấp kiến thức và thông tin hữu ích về cách chăm sóc thú cưng đúng cách. Qua các bài viết, tư vấn, PetHaven sẽ giúp bạn trở thành một người chủ nuôi thông thái, hiểu rõ nhu cầu và tâm lý của thú cưng.
                        Mang đến sự tiện lợi: Tại PetHaven, bạn có thể dễ dàng tìm kiếm và mua sắm các sản phẩm cần thiết cho thú cưng chỉ với vài thao tác đơn giản trên website. Chúng tôi cung cấp các phương thức thanh toán linh hoạt và giao hàng nhanh chóng trên toàn quốc.
                    </p>
                    <h5>Sứ Mệnh Của DoDu Pets</h5>
                    <p>Sứ mệnh củaDoDu Pets là góp phần xây dựng một cộng đồng chủ nuôi thú cưng văn minh, yêu thương và trách nhiệm. Chúng tôi tin rằng một thú cưng hạnh phúc sẽ mang lại niềm
                        vui và sự bình an cho gia đình bạn. Với mỗi sản phẩm và dịch vụ, PetHaven mong muốn:</p>
                    <h5>Đảm bảo sức khỏe và hạnh phúc cho thú cưng</h5>
                    <p>Chúng tôi hiểu rằng mỗi thú cưng đều xứng đáng nhận được sự chăm sóc tốt nhất. Từ dinh dưỡng
                        cho đến các sản phẩm chăm sóc sức khỏe, chúng tôi luôn đặt chất lượng và lợi ích của thú cưng lên hàng đầu.
                        Xây dựng niềm tin nơi khách hàng: PetHaven cam kết mang đến sự an tâm cho khách hàng thông qua các
                        sản phẩm chất lượng, dịch vụ tận tâm và chính sách hỗ trợ chu đáo. Chúng tôi hiểu rằng sự tin tưởng
                        của khách hàng là yếu tố quan trọng nhất để phát triển bền vững.
                    </p>
                    <h5>"Niềm Tin Cho Pets, An Tâm Cho Bạn"</h5>
                    <p>Với slogan "Niềm tin cho Pets, an tâm cho bạn", DoDu Pets luôn đặt khách hàng và thú cưng làm trung tâm trong mọi hoạt động của mình. Chúng tôi không ngừng cải tiến và nâng cao chất lượng dịch vụ để đảm bảo rằng mỗi sản phẩm mà bạn mua tại PetHaven đều đáp ứng đầy đủ các tiêu chuẩn an toàn, giúp bạn yên tâm và thú cưng luôn khỏe mạnh, vui vẻ.
                        Hãy để DoDu Pets trở thành người bạn đồng hành đáng tin cậy trên hành trình chăm sóc thú cưng của bạn. Chúng tôi tự hào là địa chỉ tin cậy mà các chủ nuôi thú cưng trên khắp cả nước lựa chọn.
                    </p>
                    <h4>
                        DoDu Pets.vn – Nơi thú cưng nhận được tình yêu và sự chăm sóc tốt nhất.
                    </h4>
                </div>
            </div>
        </>
    );
};
export default introduce;