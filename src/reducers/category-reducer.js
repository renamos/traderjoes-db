export default (state=[], action)=>{
    switch(action.type){
        case 'FETCH_CATEGORIES_PENDING':
            return {isSending:true};
        case 'FETCH_CATEGORIES_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_CATEGORIES_REJECTED':
            return {data: null, error: action.payload, isFetched: true};
        default:
            return state
    }
}