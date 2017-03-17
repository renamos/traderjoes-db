export default (state=[], action)=>{
    switch(action.type){
        case 'USER_LOGIN_PENDING':
            return {isSending:true};
        case 'USER_LOGIN_FULFILLED':
            localStorage.setItem("token", action.payload.data.newToken);
           return {data: action.payload.data, error: null, isFetched: true };
        case 'USER_LOGIN_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        case 'CREATE_USER_PENDING':
            return {isSending:true};
        case 'CREATE_USER_FULFILLED':
            localStorage.setItem("token", action.payload.data.newToken);
            return {data: action.payload.data, error: null, isFetched: true };
        case 'CREATE_USER_REJECTED':
            return {data: null, error: action.payload, isFetched: true};
        default:
            return state
    }
}