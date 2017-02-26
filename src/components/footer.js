import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer>
                    <h3>Trader Joe's DB</h3>
                    <p>Created by &#60;Rene Ramos/&#62; with React-Redux & Node</p>
                    <span><a href="https://github.com/renamos"><i className="fa fa-github" aria-hidden="true"></i></a><a href="www.linkedin.com/in/rene-ramos-webdev"><i className="fa fa-linkedin" aria-hidden="true"></i></a></span>
                </footer>
            </div>
        );
    }
}
