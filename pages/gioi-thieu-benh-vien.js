import React, { Component } from 'react';
import Slideshow from '../components/introduce/SlideShow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetch from 'isomorphic-unfetch'; 
// import '../static/css/gioi-thieu-benh-vien.css'
const pk = [
    { src: '../static/images/introduce/images/pk1.png', caption: "" },
    { src: '../static/images/introduce/images/pk2.png', caption: "" },
    { src: '../static/images/introduce/images/pk3.png', caption: "" },
    { src: '../static/images/introduce/images/pk4.png', caption: "" },
    { src: '../static/images/introduce/images/pk5.png', caption: "" }
];

const vp = [
    { src: '../static/images/introduce/images/vp1.png', caption: "" },
    { src: '../static/images/introduce/images/vp2.png', caption: "" },
    { src: '../static/images/introduce/images/vp3.png', caption: "" },
]

const bs = [
    { src: '../static/images/introduce/images/bs1.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs2.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs3.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs4.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs5.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs6.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs7.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs8.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs9.png', up_down: "../static/images/introduce/images/up.png" },
    { src: '../static/images/introduce/images/bs10.png', up_down: "../static/images/introduce/images/up.png" }
];

const up_down = [
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true },
    { src: "../static/images/introduce/images/up.png", hide: true }
];

const test = "Lorem Ipsum is simply dummy text of the printing and typesetting industry" +
    +"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
    + "when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    + "It has survived not only five centuries, but also the leap into electronic typesetting, "
    + "remaining essentially unchanged."
    + "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, "
    + "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            up_down_button: up_down
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static async getInitialProps() {
        const doctors = await fetch('http://13.229.107.74:8080/api/doctor/get-doctors-team?pageNum=0&pageSize=100');
        const doctorsJson = await doctors.json();

        const pk1= await fetch('http://13.229.107.74:8080/api/intro/get-my-clinic');
        const pkJson =  await pk1.json();

        const vp1 = await fetch('http://13.229.107.74:8080/api/intro/get-my-office');
        const vpJson =  await vp1.json();
        return {
            doctorsJson: doctorsJson,
            pkJson: pkJson,
            vpJson: vpJson
        }
    }
    handleClick(index) {
        if (this.state.up_down_button[index].src == '../static/images/introduce/images/down.png') {
            up_down[index].src = "../static/images/introduce/images/up.png";
            up_down[index].hide = true;
            this.setState({
                up_down_button: up_down
            });
        }
        else {
            up_down[index].src = "../static/images/introduce/images/down.png";
            up_down[index].hide = false;
            this.setState({
                up_down_button: up_down
            });
        }
    }

    render() {
        return (
            <div>
                <Header></Header>

                <div className="content content-introduction">
                    <div className="container">
                        <div className="row content-phongkham">
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <Slideshow
                                    input={this.props.pkJson.clinicImage.map((str, index) => ({ src: str, caption: "" }))}
                                    ratio={`626:371`}
                                    mode={`manual`}
                                />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <h2>Phong Kham</h2>
                                <p>{this.props.pkJson.clinic}</p>
                            </div>
                        </div>
                        <div className="row content-vanphong">
                            <div className="col-md-5">
                                <h2>Van phong cua chung toi</h2>
                                <p>{this.props.vpJson.myOffice}</p>
                            </div>
                            <div className="col-md-6">
                                <Slideshow
                                    input={this.props.vpJson.myOfficeImage.map((str, index) => ({ src: str, caption: "" }))}
                                    ratio={`632:432`}
                                    mode={`automatic`}
                                />
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row content-bacsi1">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="grid-container">
                                    {this.props.doctorsJson.content.map(show =>(
                                        
                                        <div className="grid-item"  key={show._id.counter}>
                                            <img src={show.image} className="bs" />
                                            <div className="bs">
                                                {show.name}
                                                <img src={this.state.up_down_button[0].src} className="up-down" onClick={() => this.handleClick(0)} />
                                            </div>
                                            <div className="bs">
                                                <img src='../static/images/introduce/images/line.png' className="line" />
                                            </div>
                                            <div className="bs" hidden={this.state.up_down_button[0].hide}>
                                                {show.intro}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <table className="table">
                                    <tbody>
                                    <tr>
                                        {this.props.doctorsJson.content.forEach((show, i) => (
                                            console.log('%d: %s', i, `${show.image}`)

                                           

                                    ))}
                                            {this.props.doctorsJson.content.map(show => (

                                        <td>
                                            <img src={show.image} className="bs" />
                                            <div className="bs">
                                                {show.name}
                                                <img src={this.state.up_down_button[0].src} className="up-down" onClick={() => this.handleClick(0)} />
                                            </div>
                                            <div className="bs">
                                                <img src='../static/images/introduce/images/line.png' className="line" />
                                            </div>
                                            <div className="bs" hidden={this.state.up_down_button[0].hide}>
                                                {show.intro}
                                            </div>
                                        </td>
                                    ))} */}
                                    {/* <td>
                                                <img src='../static/images/introduce/images/bs1.png' className="bs" />
                                                <div className="bs">
                                                    Dr Fujimoto
                                                    <img src={this.state.up_down_button[0].src} className="up-down" onClick={() => this.handleClick(0)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[0].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs2.png' className="bs" />
                                                <div className="bs">
                                                    Dr Fukuta
                                                    <img src={this.state.up_down_button[1].src} className="up-down" onClick={() => this.handleClick(1)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[1].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs3.png' className="bs" />
                                                <div className="bs">
                                                    Dr Kanazawa
                                                    <img src={this.state.up_down_button[2].src} className="up-down" onClick={() => this.handleClick(2)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[2].hide}>
                                                    {test}
                                                </div>
                                            </td> */}
                                        {/* </tr> */}
                                {/* <tr>
                                            <td>
                                                <img src='../static/images/introduce/images/bs4.png' className="bs" />
                                                <div className="bs">
                                                    Dr Li
                                        <img src={this.state.up_down_button[3].src} className="up-down" onClick={() => this.handleClick(3)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[3].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs5.png' className="bs" />
                                                <div className="bs">
                                                    Dr Matsumoto
                                                    <img src={this.state.up_down_button[4].src} className="up-down" onClick={() => this.handleClick(4)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[4].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs6.png' className="bs" />
                                                <div className="bs">
                                                    Dr Mitoma
                                        <img src={this.state.up_down_button[5].src} className="up-down" onClick={() => this.handleClick(5)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[5].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src='../static/images/introduce/images/bs7.png' className="bs" />
                                                <div className="bs">
                                                    Dr Oohashi
                                        <img src={this.state.up_down_button[6].src} className="up-down" onClick={() => this.handleClick(6)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[6].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs8.png' className="bs" />
                                                <div className="bs">
                                                    Dr Tanaka
                                        <img src={this.state.up_down_button[7].src} className="up-down" onClick={() => this.handleClick(7)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[7].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                            <td>
                                                <img src='../static/images/introduce/images/bs9.png' className="bs" />
                                                <div className="bs">
                                                    Dr Umemoto
                                        <img src={this.state.up_down_button[8].src} className="up-down" onClick={() => this.handleClick(8)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[8].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src='../static/images/introduce/images/bs10.png' className="bs" />
                                                <div className="bs">
                                                    Dr Yasugi
                                                <img src={this.state.up_down_button[9].src} className="up-down" onClick={() => this.handleClick(9)} />
                                                </div>
                                                <div className="bs">
                                                    <img src='../static/images/introduce/images/line.png' className="line" />
                                                </div>
                                                <div className="bs" hidden={this.state.up_down_button[9].hide}>
                                                    {test}
                                                </div>
                                            </td>
                                        </tr> */}
                                    {/* </tbody> */}
                                {/* </table> */}
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
                </div >
            <Footer></Footer>
            </div >
        );
    }
}

export default Introduction;