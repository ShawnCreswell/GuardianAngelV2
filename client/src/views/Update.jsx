import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
            .finally(() => navigate('/products'))
    }
    
    return (
        <div className="container">
            <div className='card'>
                <div className="card-header text-center">
                <h1>Update a Product</h1>
                </div>
                <div className="card-body text-center">
                    <form onSubmit={updateProduct}>
                        <p>
                            <label>Title</label><br />
                            <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                        </p>
                        <p>
                            <label>Price</label><br />
                            <input type="number"
                            name="price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }} />
                        </p>
                        <p>
                            <label>Description</label><br />
                            <input type="text"
                            name="description"
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }} />
                        </p>
                        <input className='btn btn-primary' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
    
export default Update;