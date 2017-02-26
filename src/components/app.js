import React, {Component} from 'react';
import Nav from './nav'
import Footer from './footer'
import Header from './header'


export default class App extends Component {

    render() {

        return (
            <div id="content">
                <main>
                    <Nav/>
                    <Header/>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}


