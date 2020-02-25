import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import '../static/css/service.scss';
class service extends Component {
    static async getInitialProps() {
        //get service
        const res4 = await fetch(' http://13.229.107.74:8080/api/service/get-service?pageNum=0&pageSize=100')
        const data4 = await res4.json()

        return {
            data4: data4
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="content content-service">
                    <div className="container">
                        <div className="title">
                            <div>
                                <img src="../static/images/introduce/img-service/image3.png"></img>
                                <h3>DỊCH VỤ THẨM MỸ</h3>
                            </div>
                        </div>
                        <div className="row tham-my-mat">
                            <div className="col-md-2 col-0"></div>
                            <div className="col-md-10 col-12">
                                <div className="row">
                                    <div className="col-md-2 col-2">
                                        <img className="logo-tham-my-mat" src="../static/images/introduce/img-service/logo-tham-my-mat.png"></img>
                                    </div>
                                    <div className="col-md-1 col-1"></div>
                                    <div className="col-md-7 col-9">
                                        <div className="intro_text">
                                            {/* <p>
                                            Phương pháp cắt mổ là một cách phẫu thuật trong đó da mí mắt trên được
rạch dọc theo đường mắt hai mí mong muốn để tạo ra một đôi mắt đẹp, rõ ràng,
duy trì được hai mí lâu dài.
Tạo một vết mổ dọc theo đường mắt hai mí mong muốn để loại bỏ da và mỡ thừa
và khâu vết thương để tạo ra một đôi mắt hai mí.
Ngay cả với mắt bị chảy xệ và sưng sẽ được sắp xếp tạo ra một đôi mắt hai mí to
rõ ràng.
Với phẫu thuật an toàn và khâu vết thương cẩn thận đảm bảo rằng vết thương
không bị lộ, tạo ra một đôi mắt hai mí đẹp tự nhiên.
                                            </p> */}
                                            <p>{ ReactHtmlParser(`${this.props.data4.content[0].intro}`) }</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-1 col-0"></div>
                                    <div className="col-md-11 col-12">
                                        <img className="bg-tham-my-mat" src="../static/images/introduce/img-service/bg-tham-my-mat.png"></img>

                                        <div className="row content-tmm">
                                            <div className="col-md-2 col-1"></div>
                                            <div className="col-md-4 col-4 group-img-mat">
                                                <img className="img-mat" src="../static/images/introduce/img-service/mat-1.png"></img>
                                                <img className="img-mat" src="../static/images/introduce/img-service/mat-2.png"></img>
                                                <img className="img-mat" src="../static/images/introduce/img-service/mat-3.png"></img>
                                                <img className="img-mat" src="../static/images/introduce/img-service/mat-4.png"></img>
                                            </div>
                                            <div className="col-md-1 col-1"></div>
                                            <div className="col-md-4 col-4">
                                                <img className="co-gai" src="../static/images/introduce/img-service/co-gai.png"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div  className="group-btn-dangki">
                            <img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"></img>
                        </div> */}
                        <div className="group-btn-dangki">
                            <Link href='/lien-he'>
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png" /></a>
                            </Link>
                        </div>
                        <div className="row nang-mui">
                            <div className="col-md-2 col-0"></div>
                            <div className="col-md-6 col-10 row">
                                <div className="col-md-12 rol-12">
                                    <div className="intro_text">
                                        {/* <p>
                                        Cắt ra một phần độ rộng của lỗ mũi lớn để làm cho nó nhỏ hơn. Với trường
hợp kích thước của lỗ mũi và toàn bộ mũi trông lớn được giảm bằng cách làm
cho lỗ mũi nhỏ hơn, tạo ấn tượng cho toàn bộ khuôn mặt sắc nét.
Nâng mũi là một thủ thuật trong đó một bộ phận giả bằng silicon, Gore-Tex hoặc
sụn tự thân được đưa vào cơ mũi để nâng cao cơ mũi.
Tạo cho toàn bộ khuôn mặt trông sắc nét và nhỏ, và khuôn mặt đẹp.
Sụn giả sẽ được đặt thiết kế riêng với điều chỉnh chiều cao và chiều rộng phù hợp
với mong muốn của bệnh nhân.
Nếu cơ thể bạn dị ứng, kháng lại với vật liệu nhân tạo, thì có thể sử dụng mô sụn
của bạn để làm.
                                        </p> */}
                                        <p>{ ReactHtmlParser(`${this.props.data4.content[1].intro}`) }</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12 row">
                                    <div className="col-md-6 col-6">
                                        <img className="img-mui" src="../static/images/introduce/img-service/mui1.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-mui" src="../static/images/introduce/img-service/mui2.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-mui" src="../static/images/introduce/img-service/mui3.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-mui" src="../static/images/introduce/img-service/mui4.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-2">
                                <img className="logo-nang-mui" src="../static/images/introduce/img-service/logo-nang-mui.png"></img>
                            </div>
                        </div>
                        {/* <div  className="group-btn-dangki">
                            <img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"></img>
                        </div> */}
                        <div className="group-btn-dangki">
                            <Link href='/lien-he'>
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png" /></a>
                            </Link>
                        </div>
                        <div className="row nang-nguc">
                            <div className="col-md-2 col-0 bgr-nangnguc"></div>
                            <div className="col-md-8 col-12 bgr-nangnguc content-nang-nguc">
                                <div className="row">
                                    <div className="col-md-9 col-9 intro_text">
                                        {/* <p>
                                        Đây là một hoạt động đưa túi silicon vào để tăng kích thước và tạo cảm
giác đầy đặn.
Tại Verite Clinic, phẫu thuật được ưu tiên thực hiện với phương pháp chuyển đổi
lớp. Với túi Silicon đảm bảo và với kĩ thuật uy tín của bác sĩ ngực sẽ trông đẹp
hơn và cảm giác khi sờ chạm vào cũng thấy mềm mại tự nhiên hơn.
                                        </p> */}
                                        <p>{ ReactHtmlParser(`${this.props.data4.content[4].intro}`) }</p>
                                    </div>
                                    <div className="col-md-3 col-3">
                                        <img className="logo-nang-nguc" src="../static/images/introduce/img-service/logo-nang-nguc.png"></img>
                                    </div>
                                </div>
                                <div className="row group-img-nang-nguc">
                                    <div className="col-md-4 col-4">
                                        <img className="img-nang-nguc" src="../static/images/introduce/img-service/nang-nguc-1.png"></img>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <img className="img-nang-nguc" src="../static/images/introduce/img-service/nang-nguc-2.png"></img>
                                    </div>
                                    <div className="col-md-4 col-4">
                                        <img className="img-nang-nguc" src="../static/images/introduce/img-service/nang-nguc-3.png"></img>
                                    </div>
                                </div>
                                <div className="group-btn-dangki">
                                    <Link href='/lien-he'>
                                        <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png" /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="row hut-mo">
                            <div className="col-md-2 col-0"></div>
                            <div className="col-md-8 col-12 row">
                                <div className="col-md-3 col-3">
                                    <img className="logo-hut-mo" src="../static/images/introduce/img-service/logo-hut-mo.png"></img>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="intro_text">
                                        {/* <p>
                                        Ngoài việc hút mỡ thông thường, cách sử dụng sóng siêu âm đặc biệt chỉ
ảnh hưởng đến các tế bào mỡ gọi là sóng Bayer, sau đó bằng kĩ thuật hút trực
tiếp các tế bào mỡ thông qua ống thông mỏng đặc biệt với mục tiêu sẽ làm cho
cơ thể gầy hơn.
So với hút mỡ thông thường, nó được loại bỏ khoảng 90% lượng mỡ, ít gây hại
cho cơ thể và thời gian ngừng hoạt động sau phẫu thuật ít là điểm đặc trưng của
phương pháp này.
Phương pháp này hướng đến mục tiêu không tăng cân trở lại, tạo cho một cơ thể
vóc dáng sắc nét
                                        </p> */}
                                        <p>{ ReactHtmlParser(`${this.props.data4.content[2].intro}`) }</p>
                                    </div>
                                </div>
                                <div className="col-md-3 col-3">
                                    <img className="mau-hut-mo" src="../static/images/introduce/img-service/mau-hut-mo.png"></img>
                                </div>
                                <div className="col-md-9 col-9 row">
                                    <div className="col-md-6 col-6">
                                        <img className="img-hut-mo" src="../static/images/introduce/img-service/hut-mo-1.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-hut-mo" src="../static/images/introduce/img-service/hut-mo-2.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-hut-mo" src="../static/images/introduce/img-service/hut-mo-3.png"></img>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <img className="img-hut-mo" src="../static/images/introduce/img-service/hut-mo-4.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div  className="group-btn-dangki">
                            <img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"></img>
                        </div> */}
                        <div className="group-btn-dangki">
                            <Link href='/lien-he'>
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png" /></a>
                            </Link>
                        </div>
                        <div className="row tam-trang">
                            <div className="col-md-2 col-0"></div>
                            <div className="col-md-8 col-12 row">
                                <div className="col-md-12 col-12 row">
                                    <div className="col-md-4 col-4"></div>
                                    <div className="col-md-4 col-4">
                                        <img className="logo-tam-trang" src="../static/images/introduce/img-service/logo-tam-trang.png"></img>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12 row">
                                    <div className="col-md-6 col-6 left">
                                        <img className="img-tam-trang-co-gai" src="../static/images/introduce/img-service/tam-trang-1.png"></img>
                                        <div className="group-btn-dangki">
                                            <Link href='/lien-he'>
                                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png" /></a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 row">
                                        <div className="col-md-7 col-7">
                                            <img className="img-tam-trang-left" src="../static/images/introduce/img-service/tam-trang-3.png"></img>
                                        </div>
                                        <div className="col-md-5 col-5">
                                            <img className="img-tam-trang-right" src="../static/images/introduce/img-service/tam-trang-4.png"></img>
                                        </div>
                                        <div className="col-md-12 col-12 intro_text">
                                            {/* <p>
                                            Năng lượng ánh sáng phản ứng trực tiếp và sắc tố melanin làm
phá hỏng các vấn đề về da như sẫm màu, đỏ. Sự hỗ trợ của bước sóng tần số
cao, năng lượng ánh sáng. Loại bỏ các đốm đen trên toàn bộ da, loại bỏ nám và
làm hồi sinh lại làn da trong suốt, trắng đẹp.
(Điểm khác biệt so với trước)
So với RF từ trước, bằng cách mở rộng bước sóng của ánh sáng và giảm độ rộng
của ánh sáng, nó có hiệu quả để điều trị các điểm nám chân sâu, nám không thể

xóa hoặc các điểm nám mỏng và khó phản ứng.
                                            </p> */}
                                            <p>{ ReactHtmlParser(`${this.props.data4.content[3].intro}`) }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default service;