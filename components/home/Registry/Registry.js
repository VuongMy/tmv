import React, { Component } from 'react';
import classes from './Registry.scss'
import img1 from '../image/1/1.png'
import img2 from '../image/1/2.png'
import registry_button from '../image/1/4.png'
import arrow from '../image/1/3.png'

import service1 from '../image/2/TM mắt.png'
import service2 from '../image/2/tắm trắng.png'
import service3 from '../image/2/nâng ngực.png'
import service4 from '../image/2/hút mỡ.png'
import service5 from '../image/2/befor after.png'
import vongtron from '../image/2/v tròn.png'


// import menu from '../styles/'
class Registry extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3 registry_image">
                            <img className = "image1" src={img2}/>
                            <img className = "image1" src={img1}/> 
                        </div>
                        <div className="col-1"></div>
                        <div className="col-3">
                            <div className = "service_list_text">
                                <div className="service"><img src={arrow}/><span> Cắt Mí</span></div>
                                <div className="service"><img src={arrow}/><span> Nâng Mũi</span></div>
                                <div className="service"><img src={arrow}/><span> Nâng Ngực</span></div>
                                <div className="service"><img src={arrow}/><span> Hút Mỡ</span></div>
                                <div className="service"><img src={arrow}/><span> Tắm Trắng</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="registry_text">
                        <div><span>Bạn đã sẵn sàng lột xác ....?</span></div>
                    </div>
                    <div className="registry_button">
                        <img className = "image1" src={registry_button}/>
                    </div>

                    <div className="verity_clinic">
                        <div className="row">
                        <div className="col-2"></div>
                            <div className="col-8">
                                <img src="../../../../static/introduce/img-service/dịch vụ thẩm mỹ.png"></img>
                                <div><span>VERITY CLINIC</span></div>
                                <div><span>LÀ <span>NIỀM TIN </span>CỦA KHÁCH HÀNG</span></div>
                            </div>
                        </div>
                    </div>
                    <div className = "service_list">    
                        <div className = "list_right">  
                            <img className = "image_list" src={service4}/>
                            <img className = "image_last" src={service5}/>
                        </div>
                        <div className = "circle">
                            <img src={vongtron}/>
                        </div>
                        <div className = "list_left">  
                            <img className = "image_list" src={service1}/>
                            <img className = "image_list" src={service2}/>
                            <img className = "image_list" src={service3}/> 
                        </div>
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default Registry;