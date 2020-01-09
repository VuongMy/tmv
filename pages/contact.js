import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoten:'',
            namsinh:''
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
    // This triggers everytime the input is changed
        // this.setState({
        //     hoten: evt.target.value,
        //     namsinh: evt.target.value
        // });
        this.setState({ [event.target.name]: event.target.value });
    };
    submit(index) {
        console.log(this.state.hoten, this.state.namsinh)
    }
    render() {
        return (
            <div>
                <Header></Header>


                <div className="content content-contact">
                    <div className="container">
                        <div className="row contact-row">
                            <div className="col-md-8">
                                <div className="row contact-row-0">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-10 hotline-contact" style={{"paddingTop":"70%"}}>
                                        <div>
                                            <img src="../static/images/home/bg-phone.png"></img>
                                            <img className="btn-hotline" src="../static/images/home/icon-phone.png"></img>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div className="col-md-4">
                                {/* <img src="../static/images/contact/form-chung.png"></img> */}
                                <div className="row contact-row-1">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-10 content-center">
                                        {/* <div className="top">
                                            <img src="../static/images/home/5/doctor.png"></img>
                                            <div className="layout-right">
                                                <img src="../static/images/home/image3.png"></img>
                                                <h2>ĐỘI NGŨ BÁC SỸ</h2>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> */}
                                        <h2><label>ĐĂNG KÝ THÀNH VIÊN</label></h2>
                                        <form>
                                            <div className="form-group">
                                                <p><label>Họ tên</label></p>
                                                <input type="text" className="form-control" id="name" name="hoten" value={this.state.hoten} onChange={this.handleChange}/>
                                            </div>
                                            <div className="form-group">
                                                <p><label>Ngày Tháng Năm Sinh</label></p>
                                                <input type="text" className="form-control" id="dob" name="namsinh"  value={this.state.namsinh} onChange={this.handleChange}/>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <p><label>Giới tính</label></p>
                                                        <input type="text" className="form-control" id="unisex" name="gioitinh"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="col-md-5">
                                                    <p><label>Tuổi</label></p>
                                                    <input type="text" className="form-control" id="age" name="tuoi"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <p><label>Địa chỉ</label></p>
                                                <input type="text" className="form-control" id="address" name="diachi"/>
                                            </div>
                                            <div className="form-group">
                                                <p><label>Email</label></p>
                                                <input type="text" className="form-control" id="email" name="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <p><label>Nội dung</label></p>
                                                <textarea className="form-control" rows="5" id="comment"></textarea>
                                            </div>
                                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                            <div className="row btn-dangky">
                                        
                                           
                                                {/* <button type="submit" className="btn btn-success" onClick={() => this.submit(9)}> */}
                                                    <a><img src="../static/images/contact/btn-dk.png" onClick={() => this.submit(9)}></img></a>
                                                {/* </button> */}
                                                
                                            
                                        </div>
                                        </form>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
            </div>
        );
    }
}

export default contact;