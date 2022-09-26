import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
// Link, useNavigate
    
const Detail = (props) => {
    const [guard, setGuard] = useState({})
    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/guards/' +id)
            .then(res => setGuard(res.data))
            .catch(err => console.error(err));
    });

    const deleteGuard = (guardId) => {
        axios.delete('http://localhost:8000/api/guards/' + guardId)
            .then(res => {
                navigate('/guards')
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <h1>{guard.title}</h1>
                </div>
                <div className='mt-3'>
                    <p>Price: ${guard.price}</p>
                    <p>Description: {guard.description}</p>
                    <Link className='btn btn-primary mt-5' to={"/guards/" + guard._id + "/edit"}>
                    Edit guard
                    </Link>
                    <button className='btn btn-primary ms-5 mt-5' onClick={(e) => deleteGuard(guard._id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
    
export default Detail;