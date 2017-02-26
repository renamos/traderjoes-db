import React, {Component} from 'react';
import Product from './product'
import {FetchProducts} from '../actions/products'
import {connect} from 'react-redux'
import Loading from 'react-loading';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    componentWillMount() {
        this.props.FetchProducts();
    }


    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    renderElements(number) {
        if(number > 1){
            return <p>{number} products match your search.</p>
        } else if (number == 1){
            return <p>{number} product matches your search.</p>
        } else {
            return <img src="http://www.girocam.com/img/products/no_product.gif"/>
        }
    }

    render() {

        if (this.props.productsResponse.constructor === Object && this.props.productsResponse.isFetched) {

            const products = this.props.productsResponse.data;


            let filteredProducts = products.filter(
                (product) => {
                    if(product.name) {
                        return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    }
                }
            );
            return (<div>
                    <div id="product-list-container">
                        <div id="search-bar-container">
                            <input id="search-bar"
                                   type="text"
                                   placeholder="Search Products Here..."
                                   value={this.state.search}
                                   onChange={this.updateSearch.bind(this)}/>
                        </div>
                        <div className="feedback">

                            {
                                this.renderElements(filteredProducts.length)
                            }

                        </div>

                        <div id="product-list">
                            {filteredProducts.map((product, index) => {
                                return <Product key={index} product={product}/>
                            })}

                        </div>
                    </div>
                </div>

            )
        }
        return (<div>
                <div className="loader-container">
                    <h4>Please wait...</h4>
                    <Loading id='loading' type='spokes' color='#00000'/>
                </div>
            </div>
        )

    }
}

function mapStatetoProps(state) {
    return {productsResponse: state.productsReducer}
}

export default connect(mapStatetoProps, {FetchProducts})(ProductList)