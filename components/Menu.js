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
                <ul>
                    <li>
                        <Link href='/'>
                            <a className="chose">Trang chu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dich-vu-tham-mi'>
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
                    {/* <a href="#home" className="active">Home</a></li> */}
                    {/* <li><a href="#news">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">Register</a></li>
                    <li><a href="#about">Introduce</a></li> */}
                </ul>
            </div>
        );
    }
}

export default Menu;