import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import '../static/css/contact.css'
class contact extends Component {
    render() {
        return (           
            <div>
                <Header></Header>
      
                <table id='contact'>
                    <tbody>
                        <tr>
                            <td className='main-contact' colSpan='8'>
                               
                            </td>
                            <td className='form-lien-he'>
                               Dang Ky Thanh Vien
                               <div className="form-group">
                                    <div>Ho Ten: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>                           
                                <div className="form-group">
                                    <div>Ngay Thang Nam Sinh: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>                              
                               <tr style={{"verticalAlign":"center"}}>
                                    <td>
                                        <div>Gioi Tinh</div>                              
                                        <input type="text" className='input-gt'/>
                                    </td>
                                    <td>
                                        <div>Tuoi</div>                              
                                        <input type="text" className='input-tuoi'/>
                                    </td>
                               </tr>
                               <div className="form-group">
                                    <div>Dia chi: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>So dien thoai: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>Email: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div>Noi dung: </div>
                                    <div className="col-sm-12">          
                                        <input type="text" className="form-control" style={{"backgroundImage":" url('/static/contact/images/nd.png')"}}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Footer></Footer>
            </div>
        );
    }
}

export default contact;