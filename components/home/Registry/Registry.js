import React, { Component } from 'react';
import classes from './Registry.scss'
import img1 from '../image/1/1.png'
import img2 from '../image/1/2.png'
// import menu from '../styles/'
class Registry extends Component {
    render() {
        return (
            <div>
                <div className="center">
                    <img src={img1}/>
                    <img src={img2}/>
                    <span>
                        
                    </span>
                </div>
            </div>
        )
    }
}

export default Registry;