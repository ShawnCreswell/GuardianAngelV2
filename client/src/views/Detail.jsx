import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
// Link, useNavigate
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    });

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/products')
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <h1>{product.title}</h1>
                </div>
                <div className='mt-3'>
                    <p>Price: ${product.price}</p>
                    <p>Description: {product.description}</p>
                    <Link className='btn btn-primary mt-5' to={"/products/" + product._id + "/edit"}>
                    Edit product
                    </Link>
                    <button className='btn btn-primary ms-5 mt-5' onClick={(e) => deleteProduct(product._id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
    
export default Detail;