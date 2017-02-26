import axios from 'axios'

var baseURL = 'https://traderjoes-api.herokuapp.com/category';
//var baseURL = 'http://localhost:8800/category';

export function FetchCategories() {
    var request = axios.get(baseURL + '/all');
        return {type: 'FETCH_CATEGORIES', payload: request}
    };
