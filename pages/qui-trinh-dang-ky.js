import React, { Component } from 'react';
// import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../static/css/register.scss';
// import '../static/js/register.js';

import fetch from 'isomorphic-unfetch'; 

class register1 extends Component {

    static async getInitialProps() {
        //get service
        // const res4 = await fetch(' http://13.229.107.74:8080/api/service/get-service?pageNum=0&pageSize=100')
        // const data4 = await res4.json()
        const data4 = [
            'aaaaa',
            'bbbbbbb'
        ]

        return {
            data4: data4
        }
    }
   
    componentDidMount(){

    //    var $ = require("jquery");
    //     $(".step-1").slideDown(300).fadeIn(400);
    //     $(".step-2").delay(2000).slideDown(300).fadeIn(400);
    //     $(".step-3").delay(4000).slideDown(300).fadeIn(400);
    //     $(".step-4").delay(6000).slideDown(300).fadeIn(400);
    //     $(".step-5").delay(8000).slideDown(300).fadeIn(400);

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

                        
                            {/* <p>{this.props.data4.length}</p>

                       {
                           this.props.data4.map(item => (
                           <p>{item}</p>
                        ))
                       } */}

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="step step1">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>1</span></div>
                                    <div class="content">
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                    </div>
                                </div>
                                <div class="step step2">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>2</span></div>
                                    <div class="content">
                                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
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

export default register1;