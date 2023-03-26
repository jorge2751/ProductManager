import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            {props.products.map((product, i) =>
                <p key={i}>
                    <Link to={`/products/${product._id}`} >{product.title}</Link>
                    |
                    <DeleteButton 
                    productId={product._id}
                    successCallback={()=>removeFromDom(product._id)}>
                        Delete
                    </DeleteButton>
                </p>
            )}
        </div>
    )
}

export default ProductList;