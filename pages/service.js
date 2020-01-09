import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
// import '../static/css/service.scss';
class service extends Component {
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
                                            <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                                    Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                                    tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu. Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”.
                                            </p>
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
                        <div  className="group-btn-dangki">
                            <Link href='/register'>                                       
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"/></a>
                            </Link>
                        </div>
                        <div className="row nang-mui">
                            <div className="col-md-2 col-0"></div>
                            <div className="col-md-6 col-10 row">
                                <div className="col-md-12 rol-12">
                                    <div className="intro_text">
                                        <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                                Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                                tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu. Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”.
                                        </p>
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
                        <div  className="group-btn-dangki">
                            <Link href='/register'>                                       
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"/></a>
                            </Link>
                        </div>
                        <div className="row nang-nguc">
                            <div className="col-md-2 col-0 bgr-nangnguc"></div>
                            <div className="col-md-8 col-12 bgr-nangnguc content-nang-nguc">
                                <div className="row">
                                    <div className="col-md-9 col-9 intro_text">
                                        <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                                Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                                tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu. Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”.
                                        </p>
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
                                <div  className="group-btn-dangki">
                                    <img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"></img>
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
                                        <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                                Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                                tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu. Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”.
                                        </p>
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
                        <div  className="group-btn-dangki">
                            <Link href='/register'>                                       
                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"/></a>
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
                                       <div  className="group-btn-dangki">
                                            <Link href='/register'>                                       
                                                <a><img className="btn-dangki" src="../static/images/introduce/img-service/btn-dang-ki-ngay.png"/></a>
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
                                            <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                                    Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                                    tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu. Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”.
                                            </p>
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