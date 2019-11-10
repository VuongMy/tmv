import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Registry from '../components/home/Registry/Registry'
// import Introduction from '../components/home/Introduction/Introduction'
import fetch from 'isomorphic-unfetch'; 

class index extends Component {

    static async getInitialProps() {
        const dataIntro = await fetch('http://13.229.107.74:8080/api/intro/get-my-intro')
        const dataIntroJson = await dataIntro.json()

        const res1 = await fetch('http://13.229.107.74:8080/api/intro/get-my-doctor')
        const data1 = await res1.json()

        const res2 = await fetch(' http://13.229.107.74:8080/api/doctor/get-doctors-team?pageNum=0&pageSize=100')
        const data2 = await res2.json()
       
        const res3 = await fetch(' http://13.229.107.74:8080/api/intro/get-my-customer')
        const data3 = await res3.json()

        const res4 = await fetch(' http://13.229.107.74:8080/api/service/get-service?pageNum=0&pageSize=100')
        const data4 = await res4.json()
    
        return {
            dataIntroJson: dataIntroJson,
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4
        }
      }
      componentWillMount() {
        this.setState({
            dataIntroJson: this.props.dataIntroJson,
            data1: this.props.data1,
            data2: this.props.data2,
            data3: this.props.data3,
            data4: this.props.data4
        })
      }
    
    componentDidMount(){
        // var $ = require("jquery");
        var $ = jQuery.noConflict();
        $('.slick-slider').slick({
            autoplay:true,
            pauseOnHover:false,
            dots:false,
            arrows:false,
            infinite: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            speed:4000,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipe:false,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 3
                }
              }
            ]
          });

          $('.ul1').hide();
          $('.step0').show();
          $('.title-tab').click(function(){
              var step = this.getAttribute("tab");

              var x = document.getElementsByClassName("title-tab");
              for (var i = 0; i < x.length; i++) {
             
                x[i].classList.remove('active');
              }

              this.classList.add("active");

              var test = '.'+step;
              $('.ul1').hide();
              $(test).show();
             
          });

        // $('.slick-slider').slick({ 

        // });
    }
    render() {
        return (
            <div>
                <Head>
                    <link href="/static/css/home.css" rel="stylesheet" />
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.0/slick/slick.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.0/slick/slick-theme.css"/>
                    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
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
                        <div className="content-home3 ">
                            <div className="wa-l"></div>
                            <div className="wa-r"></div>
                            <div className="slide slick-slider">
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
                                <div className="">
                                    <img src="../static/images/home/image4.png"></img>
                                </div>
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
                                    <p>{this.state.dataIntroJson.myIntro}</p>
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
                                <p>{this.state.data1.myDoctor}</p>
                                <ul>
                                    {this.state.data2.content.map(item => (
                                    
                                        <li><img src={item.image}></img></li>
                                    ))}
                                
                                </ul>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home7">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 content-right">
                                <img className="icon1" src="../static/images/home/image3.png"></img>
                                <div className="title"><img className="icon2" src="../static/images/home/icon bs.png"/><span>KẾT QUẢ KHÁCH HÀNG</span></div>
                                    <p>{this.state.data3.customersService}</p>
                                
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home8 content-home-tab">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 content-center">
                                <ul >
                                    {this.state.data4.content.map((item, key) => (
                                        <li className="title-tab" tab={`step${key}`}><p>{item.name}</p></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row content-home9 content-home-content-tab">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">

                                {this.state.data4.content.map((item, key) => (
                                    
                                    <ul className={`ul1 step${key}`}>
                                         {item.customerImage.map(item1 => (
                                            <li><img src={item1.url}></img></li>
                                         ))}
                                    </ul>

                                ))}

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
                                    <div>
                                        <img src="../static/images/home/bg-phone.png"></img>
                                        <img className="btn-hotline" src="../static/images/home/icon-phone.png"></img>
                                    </div>
                                </div>
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

export default index;