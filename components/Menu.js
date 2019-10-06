import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import menu from '../styles/'
class Menu extends Component {
    render() {
        return (
            <div>
                <Head>
                    <link href="/static/menu.css" rel="stylesheet" />
                </Head>
                {/* <ul>
                    <li>
                        <Link href='/'>
                            <a className="chose">Trang chu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/gioi-thieu-benh-vien'>
                            <a className="chose">Gioi thieu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/service'>
                            <a className="chose">Dich vu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/register'>
                            <a className="chose">Dang ky</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a className="chose">Lien he</a>
                        </Link>
                    </li>
                </ul> */}
                <div className="row header">
                    <div className="row col-4">
                        <img className="logo" src="../static/introduce/header/logo.png"></img>
                        <div className="col-6">
                            <img className="slider-left" src="../static/introduce/header/slide 2.png"></img>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-11 menu">
                            <ul>
                                <li>
                                    {/* <img src="../static/introduce/header/menu nomal.png"></img> */}
                                    <Link href='/'>
                                        <a className=""><b>HOME</b></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/gioi-thieu-benh-vien'>
                                        <a className=""><b>GIỚI THIỆU</b></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/service'>
                                        <a className=""><b>DỊCH VỤ THẨM MỸ</b></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/register'>
                                        <a className=""><b>QUY TRÌNH ĐĂNG KÝ</b></a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contact'>
                                        <a className=""><b>LIÊN HỆ</b></a>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div>
                            <img className="slider-right" src="../static/introduce/header/slide 1.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;