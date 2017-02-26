import React, {Component} from 'react';
import {SendLogIn} from '../actions/users'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'


class LogIn extends Component {

    submit() {
        this.props.SendLogIn(this.refs.email.value, this.refs.password.value);
    }

    componentDidUpdate(){
        if (this.props.userLoginResponse.isFetched && !this.props.userLoginResponse.error) {
            browserHistory.push('/');
        }
    }

    enterPress(e){
        if(e.key == 'Enter'){
            this.submit();
        }
    }



    render() {
        console.log(this.props.userLoginResponse);

        return (
            <div id="log-in">
                <h2>Please provide a valid username and password</h2>
                <label>E-mail Address</label>
                <input ref="email" type="text"/>
                <label>Password</label>
                <input ref="password" type="password" onKeyPress={this.enterPress}/>
                <button onClick={this.submit.bind(this)}>submit</button>
                <a href="#">Forgot your password?</a>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {userLoginResponse: state.userReducer}
}

export default connect(mapStatetoProps, {SendLogIn})(LogIn)