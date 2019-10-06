import React, { Component } from 'react';
import Menu from '../components/Menu';
import Registry from '../components/home/Registry/Registry'
import Introduction from '../components/home/Introduction/Introduction'

class index extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <Registry></Registry>
                    <Introduction></Introduction>
                </div>
            </div>
        );
    }
}

export default index;