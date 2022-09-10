import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }





    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-header text-center">
                        <h1>All Products</h1>
                    </div>
                </div>
            </div>
            {props.products &&
            props.products.map( (product, i) =>{
                return (
                    <div className="container">
                        <div className="card">
                            <div className="card-body text-center">
                                <div key={i}>
                                    <Link to={`/products/${product._id}`}><p>{product.title}</p></Link>
                                    {/* <button onClick={(e)=> deleteProduct(product._id)}>Delete</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
    
export default ProductList;