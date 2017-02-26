import React, {Component} from 'react';
import {GetOneProduct} from '../actions/products'
import {connect} from 'react-redux'


/*name: String,
 sku: String,
 photo: String,
 price: Number,
 category_ID: String,
 description: String,
 grams: Number,
 seasonal: Boolean,
 discontinued: Boolean,
 type: String,
 date_added: Date*/

class ProductPage extends Component {

    componentWillMount() {
        this.props.GetOneProduct(this.props.params.id);
    }

    render() {

        if (this.props.productResponse.constructor == Object && this.props.productResponse.isFetched) {

            var booleanCheck = function (value) {
                if (value == true) {
                    return "Yes"
                } else {
                    return "No"
                }
            };

            let productData = this.props.productResponse.data;

            var productName = <h1>{productData.name}</h1>;
            var description = <p><b>Product Description: </b> {productData.description}</p>;
            var sku = <li><i>SKU: </i> {productData.sku}</li>
            var price = <li><i>Price: </i>${productData.price}.00</li>
            var seasonal = <li><i>Seasonal: </i>{booleanCheck(productData.seasonal)}</li>
            var discontinued = <li><i>Discontinued: </i> {booleanCheck(productData.discontinued)}</li>
            var image =  <img src={productData.photo}/>

            return (
                <div className="product-page-container">
                    {productName}
                    {image}
                    {description}
                    <div className="product-page-info">
                    <ul>
                        {sku}
                        {price}
                        {seasonal}
                        {discontinued}
                    </ul>
                    </div>
                </div>
            );
        }


        return (
            <div className="loader-container">
                <h1>Loading</h1>
            </div>
        );

    }
}

function mapStatetoProps(state) {
    return {productResponse: state.productsReducer}
}

export default connect(mapStatetoProps, {GetOneProduct})(ProductPage)

