import React, {Component} from 'react';
import {Link} from 'react-router'


class Product extends Component {

    render() {

        var booleanCheck = function (value) {
            if (value == true) {
                return "Yes"
            } else {
                return "No"
            }
        };

        return (
            <Link to={'/product-page/' + this.props.product._id}>
            <div className="card">
                <ul>
                    <li><h4>{this.props.product.name}</h4></li>
                    <li>SKU: {this.props.product.sku}</li>
                    <li>Discontinued: {booleanCheck(this.props.product.discontinued)}</li>
                    <li>Seasonal: {booleanCheck(this.props.product.seasonal)}</li>
                </ul>
            </div>
            </Link>
        );
    }
}

export default Product;