import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import menu from '../styles/'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Head>
                    <link href="/static/css/header.css" rel="stylesheet" />
                </Head>
             
                <div className="container">
                    <div className="row row-header">
                        <div className="col-sm-12 col-md-4">
                            <div className="row row-logo">
                                <div className="col-md-3"></div>
                                <div className="col-md-9">
                                    <img className="logo" src="../static/images/header/logo.png"></img>
                                </div>
                            </div>
                            
                            <div className="row row-slide-left">
                                <div className="col-6">
                                    <img className="slider-left" src="../static/images/header/slide 2.png"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href='/'>
                                            <a>
                                                <img src="../static/images/header/menu-nomal.png"></img>
                                                <b>HOME</b>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/gioi-thieu-benh-vien'>
                                            <a>
                                                <img src="../static/images/header/menu-nomal.png"></img>
                                                <b>GIỚI THIỆU</b>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/service'>
                                            <a>
                                                <img src="../static/images/header/menu-nomal.png"></img>
                                                <b>DỊCH VỤ THẨM MỸ</b>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/register'>
                                            <a>
                                                <img src="../static/images/header/menu-nomal.png"></img>
                                                <b>QUY TRÌNH ĐĂNG KÝ</b>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'>
                                            <a><img src="../static/images/header/menu-nomal.png"></img>
                                                <b>LIÊN HỆ</b>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="slider-right">
                                <img  src="../static/images/header/slide 1.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;