import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {FetchCategories} from '../actions/category'
import Loading from 'react-loading';
import {SaveProduct} from '../actions/products'


class AddProduct extends Component {

    state = {seasonal: null, sending: false, discontinued: null};

    componentWillMount() {
        this.props.FetchCategories();
        if (!localStorage.getItem('token')) {
            browserHistory.push('/log-in');
        }
    };

    componentDidUpdate() {
        if (this.props.addProductResponse.isFetched) {
            browserHistory.push('/product-page/' + this.props.addProductResponse.data._id)
        }
    }

    submit(event) {

        event.preventDefault();


        setTimeout(function () {

            if (!this.refs.name.value) {
                alert('Please fill all data')
                return
            }
            var data =
                {
                    name: this.refs.name.value,
                    description: this.refs.description.value,
                    photo: this.refs.photo.value,
                    sku: this.refs.sku.value,
                    price: this.refs.price.value,
                    grams: this.refs.grams.value,
                    category: this.refs.category.value,
                    discontinued: this.state.discontinued == "true",
                    seasonal: this.state.seasonal == "true"

                };
            this.setState({sending: true});
            this.props.SaveProduct(data);
        }.bind(this), 300)

    }

    changeDiscontinued(e){
       this.setState({discontinued: e.target.value})

    }

    changeSeasonal(e){
        this.setState({seasonal: e.target.value})

    }

    render() {

        if (this.props.categoriesResponse.constructor === Object && this.props.categoriesResponse.isFetched) {
            let categories = this.props.categoriesResponse.data;

            return (
                <div id="add-product-container">
                    <div id="add-product-form">
                        <h2>add product</h2>
                        <label>Name </label>
                        <input placeholder="Joe Joe's" type="text" ref="name"/>
                        <label>Photo </label>
                        <input placeholder="http://example.jpg" type="text" ref="photo"/>
                        <label>SKU </label>
                        <input type="text" ref="sku"/>
                        <label>Price </label>
                        <input type="text" ref="price"/>
                        <label>Grams </label>
                        <input type="text" ref="grams"/>
                        <label>Description</label>
                        <textarea ref="description"></textarea><br/>

                        <label>Discontinued: </label>
                        <label>
                            <input name="discontinued" type="radio" value="true" onChange={this.changeDiscontinued.bind(this)}/>
                            Yes
                        </label>
                        <label>
                            <input name="discontinued" type="radio" value="false" onChange={this.changeDiscontinued.bind(this)}/>
                            No
                        </label><br/>
                        <label>Seasonal: </label>
                        <label>
                            <input name="seasonal" type="radio" value="true" onChange={this.changeSeasonal.bind(this)}/>
                            Yes
                        </label>

                        <label>
                            <input name="seasonal" type="radio" value="false" onChange={this.changeSeasonal.bind(this)}/>
                            No
                        </label><br/>
                        <label>Category: </label>
                        <select ref="category">
                            <option>Select</option>
                            {
                                categories.map((option, index) => {
                                    return <option key={index} ref="category"
                                                   value={option._id}>{option.name}</option>
                                })
                            }
                        </select>
                        <input type="submit" value="Submit" onClick={this.submit.bind(this)}/>
                    </div>
                </div>
            );
        }
        return (
            <Loading id='loading' type='spokes' color='#348784'/>
        )
    }
}

function mapStatetoProps(state) {
    return {categoriesResponse: state.categoryReducer, addProductResponse: state.productsReducer}
}

export default connect(mapStatetoProps, {FetchCategories, SaveProduct})(AddProduct)
