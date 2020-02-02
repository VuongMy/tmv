import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { ToastContainer, toast } from "react-toastify";

// import Loader from 'react-loader-spinner'
import Loader from 'react-loader';
class contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoten: '',
            namsinh: '',
            gioitinh: '',
            tuoi: '',
            email: '',
            cmt: '',
            diachi: '',
            show: true
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // static async getInitialProps() {
    //     const doctors = await fetch('http://13.229.107.74:8080/auth/send-mail',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body:{
    //             "address": this.state.diachi,
    //             "age": this.state.tuoi,
    //             "birthday": this.state.namsinh,
    //             "content": this.state.cmt,
    //             "email": this.state.email,
    //             "gender": this.state.gioitinh,
    //             "name": this.state.name
    //         }
    //     })
    //     const doctorsJson = await doctors.json()
    //     return {
    //         doctorsJson: doctorsJson,
    //     }
    // }
    handleChange(event) {
        // This triggers everytime the input is changed
        // this.setState({
        //     hoten: evt.target.value,
        //     namsinh: evt.target.value
        // });
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.dob]: event.target.value,
            [event.target.unisex]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.address]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.comment]: event.target.value
        });

    };
    submit() {
        console.log(this.state.hoten, this.state.namsinh, this.state.gioitinh, this.state.email, this.state.cmt, this.state.tuoi, this.state.diachi);
        this.setState({ show: false });
        fetch('http://13.229.107.74:8080/auth/send-mail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify({
                    "address": this.state.diachi,
                    "age": this.state.tuoi,
                    "birthday": this.state.namsinh,
                    "content": this.state.cmt,
                    "email": this.state.email,
                    "gender": this.state.gioitinh,
                    "name": this.state.name
                })
        }).then(res => {
            if (res.status === 200) {
                // alert("Ex")
                document.getElementById("name").value = '';
                document.getElementById("age").value = '';
                document.getElementById("email").value = '';
                document.getElementById("comment").value = '';
                document.getElementById("address").value = '';
                document.getElementById("unisex").value = '';
                document.getElementById("dob").value = '';
                this.setState({
                    show: true,
                    hoten: '',
                    namsinh: '',
                    gioitinh: '',
                    tuoi: '',
                    email: '',
                    cmt: '',
                    diachi: '',
                });
                toast.success("Your Infomation sent");
            }
            else
                toast.error("Error Notification !");
        })

        // const doctorsJson = await doctors.json()
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
                                    <div className="col-md-10 hotline-contact" style={{ "paddingTop": "70%" }}>
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
                                                <input type="text" className="form-control" id="name" name="hoten" value={this.state.hoten} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <p><label>Ngày Tháng Năm Sinh</label></p>
                                                <input type="text" className="form-control" id="dob" name="namsinh" value={this.state.namsinh} onChange={this.handleChange} />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="form-group">
                                                        <p><label>Giới tính</label></p>
                                                        <input type="text" className="form-control" id="unisex" name="gioitinh" value={this.state.gioitinh} onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-2"></div>
                                                <div className="col-md-5">
                                                    <p><label>Tuổi</label></p>
                                                    <input type="text" className="form-control" id="age" name="tuoi" value={this.state.tuoi} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <p><label>Địa chỉ</label></p>
                                                <input type="text" className="form-control" id="address" name="diachi" value={this.state.diachi} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <p><label>Email</label></p>
                                                <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <p><label>Nội dung</label></p>
                                                <textarea className="form-control" rows="5" id="comment" name="cmt" value={this.state.cmt} onChange={this.handleChange}></textarea>
                                            </div>
                                            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                            <div className="row btn-dangky">


                                                {/* <button type="submit" className="btn btn-success" onClick={() => this.submit(9)}> */}
                                                <a><img src="../static/images/contact/btn-dk.png" onClick={() => this.submit()}></img></a>
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
                <Loader loaded={this.state.show}></Loader>
                <ToastContainer autoClose={2000} />
                <Footer />
                {/* <NProgress /> */}
                {/* <NextNProgress /> */}
            </div>

        );
    }
}

export default contact;