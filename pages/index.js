import React, { Component } from 'react';
import Menu from '../components/Menu';
import Registry from '../components/home/Registry/Registry'

class index extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <Registry></Registry>
                </div>
            </div>
        );
    }
}

export default index;