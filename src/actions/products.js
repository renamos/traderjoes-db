import axios from 'axios'

var baseURL = 'https://traderjoes-api.herokuapp.com/product';
//var baseURL = 'http://localhost:8800/product';

export function FetchProducts(){
    var request = axios.get(baseURL + '/all')
    return { type: 'FETCH_PRODUCTS', payload: request  }
}

export function GetOneProduct(id){
    var request = axios.get(baseURL + '/product-page/' + id)
    return { type: 'FETCH_PRODUCT', payload: request  }
}

export function SaveProduct (product){
    var request = axios.post(baseURL + '/create', product)
    return { type: 'ADD_PRODUCT', payload: request  }
}