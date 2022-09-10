import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
// Link, useNavigate
    
const Products = (props) => {
    const [person, setPerson] = useState({})
    const { id } = useParams();

    // const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, );
    
    return (
        <div>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <p>Description: {person.description}</p>

        </div>
    )
}
    
export default Products;