import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';


class Nav extends Component {

    render() {
        return (<div id="nav-container">
            <Menu right>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/log-in">Log-In</a>
                    <a id="add-product" className="menu-item" href="/add-product">Add Product</a>
            </Menu>
            </div>
        );
    }
}


export default Nav