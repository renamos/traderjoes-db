export default (state=[], action)=>{
    switch(action.type){

        //Fetch ALL products
        case 'FETCH_PRODUCTS_PENDING':
            return {isSending:true};
        case 'FETCH_PRODUCTS_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_PRODUCTS_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        //Fetch SINGLE product
        case 'FETCH_PRODUCT_PENDING':
            return {isSending:true};
        case 'FETCH_PRODUCT_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'FETCH_PRODUCT_REJECTED':
            return {data: null, error: action.payload, isFetched: true};

        //Add product
        case 'ADD_PRODUCT_PENDING':
            return {isSending:true};
        case 'ADD_PRODUCT_FULFILLED':
            return {data: action.payload.data.data, error: null, isFetched: true };
        case 'ADD_PRODUCT_REJECTED':
            return {data: null, error: action.payload, isFetched: true};
        default:
            return state
    }
}