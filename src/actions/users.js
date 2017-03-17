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

export function SendNewUser(data){
    var request =
        axios({
            method: 'post',
            url: 'https://traderjoes-api.herokuapp.com/user/create',
            data: data
        });
    return { type: 'CREATE_USER', payload: request  }
}