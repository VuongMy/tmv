import React, { Component } from 'react';
// import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../static/css/register.scss';
// import '../static/js/register.js';

import fetch from 'isomorphic-unfetch'; 

class register1 extends Component {
   
    componentDidMount(){

       var $ = require("jquery");
        $(".step-1").slideDown(300).fadeIn(400);
        $(".step-2").delay(2000).slideDown(300).fadeIn(400);
        $(".step-3").delay(4000).slideDown(300).fadeIn(400);
        $(".step-4").delay(6000).slideDown(300).fadeIn(400);
        $(".step-5").delay(8000).slideDown(300).fadeIn(400);

    }
    render() {
        
        return (
            <div>
                <Header></Header>
                
                <div className="content content-register">
                    <div className="container">

                        <div className="btn-top">
                            <img className="icon" src="../static/images/home/image3.png"></img>
                            <img className="btn" src="../static/images/register/btn-step-register.png"></img>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 step step-1">
                                <img src="../static/images/register/step-1.png"></img>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 step step-2">
                                <img src="../static/images/register/step-2.png"></img>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 step step-3">
                                <img src="../static/images/register/step-3.png"></img>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 step step-4">
                                <img src="../static/images/register/step-4.png"></img>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 step step-5">
                                <img src="../static/images/register/step-5.png"></img>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default register1;