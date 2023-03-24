import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    const nav = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.error(err));
    }, []);
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {nav('/')})
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
        </div>
    )
}
    
export default Detail;