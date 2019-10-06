import React, { Component } from 'react';
import classes from './Introduction.scss'
import icon_bs from '../image/3/icon bs.png'
import bs from '../image/3/bs.png'
import xemthem from '../image/3/xem thêm.png'

class Introduction extends Component {
    render() {
        return (
            <div>
                <div className="content1">
                    <div className="intro">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-4">
                                <img src={bs}/>
                            </div>
                            <div className="col-4">
                                <img src="../../../../static/introduce/img-service/dịch vụ thẩm mỹ.png"></img>
                                <div><img src={icon_bs}/><span>GIỚI THIỆU VỀ CHÚNG TÔI</span></div>
                                <div className="intro_text">
                                    <p> "Ngô Tất Tố là nhà văn hiện thực nổi tiếng giai đoạn 1930-1945.
                                            Trong tác phẩm của ông, lần đầu tiên trong văn học Việt Nam xuất hiện hình
                                            tượng điển hình về người phụ nữ nông dân với những phẩm chất quý báu.
                                            Đó là nhân vật chị Dậu trong tác phẩm “ Tắt đèn”. Đặc biệt đoạn trích “ Tức nước vỡ bờ” thể hiện tập trung nhất,
                                            rõ ràng nhất tính cách của chị Dậu. Chị Dậu là một người vợ đảm đang, hết lòng yêu thương chồng."</p>
                                    <img src={xemthem}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Introduction;