import axios from 'axios'

export function SendLogIn(email, password){
    var request =
        axios({
            method: 'post',
            url: 'https://traderjoes-api.herokuapp.com/user/log-in',
            data: {
                email: email,
                password: password
            }
        });
    return { type: 'USER_LOGIN', payload: request  }
}