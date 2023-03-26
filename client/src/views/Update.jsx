import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, []);

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {
                console.log(res)
                navigate(-1)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <><ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description} /><DeleteButton productId={product._id} successCallback={() => navigate('/')}></DeleteButton></>
            )}
        </div>
    )
}

export default Update;