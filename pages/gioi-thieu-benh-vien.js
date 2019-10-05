import React, { Component } from 'react';
import Slideshow from '../components/introduce/SlideShow';
import Menu from '../components/Menu';
import Head from 'next/head';
import '../static/gioi-thieu-benh-vien.css'
const pk = [
    {src: '../static/introduce/images/pk1.png', caption:""},
    {src: '../static/introduce/images/pk2.png', caption:""},
    {src: '../static/introduce/images/pk3.png', caption:""},
    {src: '../static/introduce/images/pk4.png', caption:""},
    {src: '../static/introduce/images/pk5.png', caption:""}
];

const vp = [
    {src: '../static/introduce/images/vp1.png', caption:""},
    {src: '../static/introduce/images/vp2.png', caption:""},
    {src: '../static/introduce/images/vp3.png', caption:""},
]

const bs = [
    {src: '../static/introduce/images/bs1.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs2.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs3.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs4.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs5.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs6.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs7.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs8.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs9.png', up_down:"../static/introduce/images/up.png"},
    {src: '../static/introduce/images/bs10.png',up_down:"../static/introduce/images/up.png"}
];

const up_down = [
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true},
    {src:"../static/introduce/images/up.png",hide:true}
];

const test = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"+ 
+"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
+"when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
+"It has survived not only five centuries, but also the leap into electronic typesetting, "
+"remaining essentially unchanged." 
+"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, "
+"and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

const test1 = ' ';
class Introduction extends Component {
    constructor(props){
        super(props);
        this.state = {
            up_down_button: up_down
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {       
        if(this.state.up_down_button[index].src == '../static/introduce/images/down.png'){
            up_down[index].src = "../static/introduce/images/up.png";
            up_down[index].hide = true;
            this.setState({
                up_down_button:up_down
            });
        }
        else{
            up_down[index].src = "../static/introduce/images/down.png";
            up_down[index].hide = false;
            this.setState({
                up_down_button: up_down
            });
        }
    }


    hiddenText(index){

    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="phong-kham">
                    <div className="slide">
                        <Slideshow
                            input={pk}
                            ratio={`626:371`}
                            mode={`manual`}
                        />  
                    </div>
                    <div className="desc">
                        <h2>Phong Kham</h2>
                        <p>Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,
                        </p>
                    </div>
                </div>
                <div className="van-phong">
                    <div className="desc-vp">
                        <h2>Van phong cua chung toi</h2>
                        <p>Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,Make music,
                        </p>
                    </div>
                    <div className="slide-vp">
                        <Slideshow
                            input={vp}
                            ratio={`632:432`}
                            mode={`automatic`}
                        />
                    </div>
                </div>
                
                <div className="bac-si">
                    
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <img src='../static/introduce/images/bs1.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Fujimoto
                                        <img src={this.state.up_down_button[0].src} className="up-down" onClick={()=>this.handleClick(0)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[0].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs2.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Fukuta
                                        <img src={this.state.up_down_button[1].src} className="up-down" onClick={()=>this.handleClick(1)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[1].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs3.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Kanazawa
                                        <img src={this.state.up_down_button[2].src} className="up-down" onClick={()=>this.handleClick(2)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[2].hide}>
                                        {test}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='../static/introduce/images/bs4.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Li
                                        <img src={this.state.up_down_button[3].src} className="up-down" onClick={()=>this.handleClick(3)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[3].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs5.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Matsumoto
                                        <img src={this.state.up_down_button[4].src} className="up-down" onClick={()=>this.handleClick(4)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[4].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs6.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Mitoma
                                        <img src={this.state.up_down_button[5].src} className="up-down" onClick={()=>this.handleClick(5)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[5].hide}>
                                        {test}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='../static/introduce/images/bs7.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Oohashi
                                        <img src={this.state.up_down_button[6].src} className="up-down" onClick={()=>this.handleClick(6)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[6].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs8.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Tanaka
                                        <img src={this.state.up_down_button[7].src} className="up-down" onClick={()=>this.handleClick(7)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[7].hide}>
                                        {test}
                                    </div>
                                </td>
                                <td>
                                    <img src='../static/introduce/images/bs9.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Umemoto
                                        <img src={this.state.up_down_button[8].src} className="up-down" onClick={()=>this.handleClick(8)}/>
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[8].hide}>
                                        {test}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src='../static/introduce/images/bs10.png'  className="bs"/>
                                    <div className="bs">
                                        Dr Yasugi
                                        <img src={this.state.up_down_button[9].src} className="up-down" onClick={()=>this.handleClick(9)}/>                                       
                                    </div>
                                    <div className="bs">
                                        <img src='../static/introduce/images/line.png' className="line"/>
                                    </div>
                                    <div className="bs" hidden={this.state.up_down_button[9].hide}>
                                        {test}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );

        

        
    }
}

export default Introduction;