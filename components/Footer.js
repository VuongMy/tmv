import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <Head>
                    <link href="/static/css/footer.css" rel="stylesheet" />
                </Head>
             
                <div className="container">
                    <div className="row row-footer">
                        <div className="col-md-1"></div>
                        <div className="col-md-4 content-left">
                            <img src="../static/images/footer/logo-footer.png"></img>
                            <p>Giấy phép kinh doanh số: 0213213312 cấp ngày 5/8/2020</p>
                            <p>Số GPQC: 09155/2020/ATTP-XNQC</p>
                            <p className="text3">© 2019 Verite clinic</p>
                        </div>
                        <div className="col-md-6 content-right">
                            <ul className="menu-footer">
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <b>HOME</b>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/gioi-thieu-benh-vien'>
                                        <a>
                                            <b>GIỚI THIỆU</b>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/service'>
                                        <a>
                                            <b>DỊCH VỤ THẨM MỸ</b>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/register'>
                                        <a>
                                            <b>QUY TRÌNH ĐĂNG KÝ</b>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contact'>
                                        <a>
                                            <b>LIÊN HỆ</b>
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                            <div className="icon">
                                <img className="icon1" src="../static/images/footer/icon-address.png"></img>
                                <img className="icon2" src="../static/images/footer/icon-email.png"></img>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                        
                </div>
            </div> 
        );
    }
}
export default Footer;