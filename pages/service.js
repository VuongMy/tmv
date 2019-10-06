import React, { Component } from 'react';
import Menu from '../components/Menu.js';
import '../static/service.scss'
class service extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="content">
                    <div className="title">
                        <div>
                            <img src="../static/introduce/img-service/dịch vụ thẩm mỹ.png"></img>
                            <h2>DỊCH VỤ THẨM MỸ</h2>
                        </div>
                    </div>
                    <div className="row tham-my-mat">
                        <div className="col-2"></div>
                        <div className="col-10">
                            <img className="logo-thammymat" src="../static/introduce/img-service/thẩm mỹ mắt.png"></img>
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6">
                                    <p> Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                        Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                        tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu.
                                        Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”. Đặc biệt đoạn trích “ Tức nước vỡ bờ” thể hiện tập trung nhất,
                                        rõ ràng nhất tính cách của chị Dậu. Chị Dậu là một người vợ đảm đang, hết lòng yêu thương chồng.</p>
                                </div>
                                <div className="col-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-11">
                                    <div className="row img-mat">
                                        <div className="col-2"></div>
                                        <div className="col-4 mat">
                                            <img src="../static/introduce/img-service/mắt 1.png"></img>
                                            <img src="../static/introduce/img-service/mắt 2.png"></img>
                                            <img src="../static/introduce/img-service/mắt 3.png"></img>
                                            <img src="../static/introduce/img-service/mắt 4.png"></img>
                                        </div>
                                        <div className="col-6">
                                            <img src="../static/introduce/img-service/mẫu TM mắt.png"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default service;