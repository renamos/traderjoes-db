import React, {Component} from 'react';
import {SendNewUser} from '../actions/users'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'


class NewUser extends Component {
    state = {sending: false}

    submit(event) {

        event.preventDefault();
        var data =
            {
                username: this.refs.username.value,
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                city: this.refs.city.value,
                state: this.refs.state.value,
                email: this.refs.email.value,
                password:this.refs.password.value


            };
        console.log(data)


   /*     setTimeout(function () {

            if (!this.refs.username.value) {
                alert('Please fill all data')
                return
            }
            var data =
                {
                    username: this.refs.username.value,
                   firstName: this.refs.firstName.value,
                   lastName: this.refs.lastName.value,
                    city: this.refs.city.value,
                    state: this.refs.state.value,
                    email: this.refs.email.value


                };
            this.setState({sending: true});
            this.props.SendNewUser(data);
        }.bind(this), 300)*/

    }

    componentDidUpdate(){
        if (this.props.createUserResponse.isFetched && !this.props.createUserResponse.error) {
            browserHistory.push('/');
        }
    }

    enterPress(e){
        if(e.key == 'Enter'){
            this.submit();
        }
    }



    render() {
        console.log(this.props.createUserResponse);

        return (
            <div id="log-in">
                <h2>Create a new user</h2>
                <label>Username</label>
                <input placeholder="danbaneCEO" ref="username" type="text"/>
                <label>First Name</label>
                <input placeholder="Dan" ref="firstName" type="text"/>
                <label>Last Name</label>
                <input placeholder="Bane" ref="lastName" type="text"/>
                <label>Home Store City/State</label>
                <input placeholder="Pasadena" ref="city" type="text"/>
                <select ref="state">
                    <option value="ca">CA</option>
                </select>
                <label>E-mail</label>
                <input placeholder="danbane@traderjoes.com" ref="email" type="email"/>
                <label>Password</label>
                <input ref="password" type="password" onKeyPress={this.enterPress}/>
                <button onClick={this.submit.bind(this)}>submit</button>
            </div>
        );
    }
}

function mapStatetoProps(state) {
    return {createUserResponse: state.userReducer}
}

export default connect(mapStatetoProps, {SendNewUser})(NewUser)