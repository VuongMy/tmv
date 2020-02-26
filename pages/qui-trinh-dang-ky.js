import React, { Component } from 'react';
// import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../static/css/register.scss';
// import '../static/js/register.js';

import fetch from 'isomorphic-unfetch'; 
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const dataTest = [
    '<b>Thông báo cho chúng tôi thông tin của người cần tư vấn</b><br>'
    +'Chi tiết, nội dung tư vấn, họ tên bệnh nhân, ngày tháng năm sinh<br>'
    +'Ảnh mẫu lý tưởng Mặt trước ,ngang (Đối với nhiều người, hãy gửi sau khi đã được sắp xếp thống nhất)<br>',
    '<b>Dựa trên sự tư vấn đã nhận được, chúng tôi sẽ gửi cho bạn báo giá khái quát và trả lời qua email.</b><br>'
    +'(Có khả năng nội dung của chi phí báo giáước tính sẽ thay đổi một chút so với khi tư vấn. )<br>'+
    'Trong trường hợp phẫu thuật mũi, về cơ bản là cần chuẩn bị trước, vì vậy phải đặt trước hai tháng"'+
    '<br>Lưu ý: Thông thường trường hợp sau ngày phẫu thuật 1 tháng, nếu húy hoặc thay đổi ngày tháng, phí hủy sẽ được tính. Xem tệp đính kèm cho phí hủy.<br>'+
    'Bệnh nhân cúm không thể được phẫu thuật. Nếu có sốt nhẹ, tùy thuộc vào ý kiến của bác sĩ.',
    '<b>Khi đã đặt OPE thì cùng thời điểm đó tùy thuộc vào nội dung được trao đổi thảo luận, bệnh nhân sẽ được tiến hành kiểm tra.'
    +'Và bạn sẽ được gửi thư đồng ý và văn bản đồng ý. Cho đến khi phẫu thuật OPE bạn vui lòng gửi cho bệnh viện. Bản gốc thì mang theo khi đến bệnh viện.',
    '<b>Về tài liệu kiểm tra</b>'+
    '<br>-	Trường hợp làm Mũi: CT đầu (dữ liệu DICM từ hàm dưới đến vùng cận 0, 1 mm)<br>'+
    'Gửi dữ liệu qua e-mail trước. (lưu ý rằng nếu dữ liệu không đầy đủ, sẽ khó hướng dẫn phẫu thuật.)<br>'+
    '-	Trong trường hợp gây mê toàn thân: X-quang ngực + Điện tâm đồ + dữ liệu lấy mẫu máu là bắt buộc<br>'+
    'Lấy mẫu máu (phí phẫu thuật cao hơn 20% đối với HIV và viêm gan C, bệnh giang mai cần giấy chứng nhận chữa khỏi hoàn toàn)<br>'+
    '-	Về việc ở lại sau khi phẫu thuật<br>'+
    'Mắt: ............Ngày OPE  3 ngày    1 tuần   Tùy theo tình trạng 2 tuần<br>'+
    'Mũi: ............Ngày OPE  2 ngày  3 ngày    1 tuần    2 tuần<br>'+
    'Đường nét mặt:  Ngày OPE   2 ngày   3 ngày   1 tuần  2 tuần<br>'+
    'Dạng tiêm:  Ngày OPE<br>'+
    'Tùy theo kiểu nâng: Ngày OPE',
    '<b>Nếu bạn muốn sửa sau phẫu thuật, tất cả các chi phí được nêu trong thư đồng ýsẽ phát sinh.</b>'


];
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
                                    {ReactHtmlParser(`${dataTest[0]}`)}
                                        {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. */}
                                    </div>
                                </div>
                                <div class="step step2">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>2</span></div>
                                    <div class="content">
                                    {ReactHtmlParser(`${dataTest[1]}`)}
                                        {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. */}
                                    </div>
                                </div>
                                <div class="step step1">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>3</span></div>
                                    <div class="content">
                                    {ReactHtmlParser(`${dataTest[2]}`)}
                                    </div>
                                </div>
                                <div class="step step2">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>4</span></div>
                                    <div class="content">
                                    {ReactHtmlParser(`${dataTest[3]}`)}
                                    </div>
                                </div>
                                <div class="step step1">
                                    <div class="space-fix"></div>
                                    <div class="number"><span>5</span></div>
                                    <div class="content">
                                    {ReactHtmlParser(`${dataTest[4]}`)}
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