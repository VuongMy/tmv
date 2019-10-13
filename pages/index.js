import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Registry from '../components/home/Registry/Registry'
// import Introduction from '../components/home/Introduction/Introduction'

class index extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="/static/css/home.css" rel="stylesheet" />
                </Head>

                <Header></Header>
                
                <div className="content content-home">
                    <div className="container">
                        <div className="row content-home1">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 content-home-center">
                                <img className="image1" src="../static/images/home/img-home-1.png"></img>
                                <p>Bạn đã sẵn sàng lột xác ....?</p>
                                <img className = "image2" src="../static/images/home/4.png"/>
                            </div>
                            <div className="col-md-4 content-home-right">
                                <ul>
                                    <li><img src="../static/images/home/3.png"/><span> Cắt Mí</span></li>
                                    <li><img src="../static/images/home/3.png"/><span> Nâng Mũi</span></li>
                                    <li><img src="../static/images/home/3.png"/><span> Nâng Ngực</span></li>
                                    <li><img src="../static/images/home/3.png"/><span> Hút Mỡ</span></li>
                                    <li><img src="../static/images/home/3.png"/><span> Tắm Trắng</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row content-home2">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <img src="../static/images/home/image3.png"></img>
                                <div><h2>VERITE CLINIC</h2></div>
                                <div><h2>LÀ <span>NIỀM TIN </span>CỦA KHÁCH HÀNG</h2></div>
                            </div>
                        </div>
                        <div className="row content-home3">
                            <div className="col-md-4 content-left">
                                <img src="../static/images/home/image4.png"></img>
                            </div>
                            <div className="col-md-4 content-center">
                                <img src="../static/images/home/image5.png"></img>
                            </div>
                            <div className="col-md-4">
                                <img src="../static/images/home/image6.png"></img>
                            </div>
                        </div>
                        <div className="row content-home4">
                            <div className="col-md-2"></div>
                            <div className="col-md-3 content-center">
                                <img src="../static/images/home/bs.png"></img>
                            </div>
                            <div className="col-md-5 content-right">
                                <img className="icon1" src="../static/images/home/image3.png"></img>
                                <div className="title"><img className="icon2" src="../static/images/home/icon bs.png"/><span>GIỚI THIỆU VỀ CHÚNG TÔI</span></div>
                                <div className="intro_text">
                                    <p className="text1">"</p>
                                    <p>Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                            Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                            tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu.
                                            Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”. Đặc biệt đoạn trích “ Tức nước vỡ bờ” thể hiện tập trung nhất,
                                            rõ ràng nhất tính cách của chị Dậu. Chị Dậu là một người vợ đảm đang, hết lòng yêu thương chồng.
                                    </p>
                                    <p className="text2">"</p>
                                </div>
                                <a link="#"><img className="btn-viewmore" src="../static/images/home/xem-them.png"/></a>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home5">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                
                            </div>
                        </div>
                        <div className="row content-home6">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 content-center">
                                <div className="top">
                                    <img src="../static/images/home/5/doctor.png"></img>
                                    <div className="layout-right">
                                        <img src="../static/images/home/image3.png"></img>
                                        <h2>ĐỘI NGŨ BÁC SỸ</h2>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                <ul>
                                    <li><img src="../static/images/home/4/bs1.png"></img></li>
                                    <li><img src="../static/images/home/4/bs2.png"></img></li>
                                    <li><img src="../static/images/home/4/bs3.png"></img></li>
                                    <li><img src="../static/images/home/4/bs4.png"></img></li>
                                    <li><img src="../static/images/home/4/bs5.png"></img></li>
                                    <li><img src="../static/images/home/4/bs6.png"></img></li>
                                </ul>
                                <ul>
                                    <li><img src="../static/images/home/4/bs7.png"></img></li>
                                    <li><img src="../static/images/home/4/bs8.png"></img></li>
                                    <li><img src="../static/images/home/4/bs9.png"></img></li>
                                    <li><img src="../static/images/home/4/bs10.png"></img></li>
                                </ul>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home7">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 content-right">
                                <img className="icon1" src="../static/images/home/image3.png"></img>
                                <div className="title"><img className="icon2" src="../static/images/home/icon bs.png"/><span>KẾT QUẢ KHÁCH HÀNG</span></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home8 content-home-tab">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 content-center">
                                <ul>
                                    <li className="active" ><p>THẨM MỸ MẮT</p></li>
                                    <li><p>NÂNG MŨI</p></li>
                                    <li><p>HÚT MỠ</p></li>
                                    <li><p>TẮM TRẮNG</p></li>
                                    <li><p>NÂNG NGỰC</p></li>
                                </ul>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home9 content-home-content-tab">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <ul className="ul1">
                                    <li><img src="../static/images/home/5/1.png"></img></li>
                                    <li><img src="../static/images/home/5/2.png"></img></li>
                                    <li><img src="../static/images/home/5/3.png"></img></li>
                                </ul>
                                <ul className="ul2">
                                    <li><img src="../static/images/home/5/4.png"></img></li>
                                    <li><img src="../static/images/home/5/5.png"></img></li>
                                    <li><img src="../static/images/home/5/6.png"></img></li>
                                </ul>

                                <img className="btn-action" src="../static/images/home/5/7.png"/>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home10">
                            <div className="col-md-2"></div>
                            <div className="col-md-3 content-left">
                                <img src="../static/images/home/Untitled-2.png"></img>
                            </div>
                            <div className="col-md-5 content-right">
                                <p>Chúng tôi muốn tìm đối tác để làm mẫu quảng cáo với các dịch vụ hoàn toàn miễn phí dành cho bạn:</p>
                                <h2>Bạn đã sẵn sàng</h2>
                                <p className="text2" >muốn lột xác giống như họ...?</p>
                                <ul>
                                    <li><img src="../static/images/home/Untitled-3.png"></img></li>
                                    <li><img src="../static/images/home/Untitled-4.png"></img></li>
                                    <li><img src="../static/images/home/Untitled-5.png"></img></li>
                                    <li><img src="../static/images/home/Untitled-6.png"></img></li>
                                </ul>
                                <div className="layout-btn">
                                    <img className="btn-register" src="../static/images/home/4.png"/>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home11">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <h2>Với mong muốn mở rộng và kết nối chúng tôi muốn tìm đối tác...</h2>
                                <p>Chúng tôi luôn chào đón các thành viên mong muốn bản thân cũng như khách hàng của mình trở nên xinh đẹp và hấp dẫn. Vậy bạn đã sẵn sàng lột xác, hãy liên hệ với chúng tôi qua đường dây nóng bên dưới để được tư vấn...?</p>
                                <div className="layout-btn">
                                    <img src="../static/images/home/6/hotline.png"></img>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home12">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 content-center">
                                <div className="line"></div>
                                <div className="left">
                                  
                                        <img src="../static/images/home/iconfb.png"/>
                                        <a link="#">
                                        <span>FACEBOOK</span>
                                    </a>
                                </div>
                                <div className="right">
                                        <img src="../static/images/home/icontw.png"/>
                                        <a link="#">
                                        <span>INSTAGRAM</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3 content-right">
                                <img src="../static/images/home/footer scoll up.png"/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}

export default index;