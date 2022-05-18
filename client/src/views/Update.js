import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('')

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.oneSingleProduct.title);
                // console.log(res.oneSingleProduct.data)
                setPrice(res.data.oneSingleProduct.price);
                setDescription(res.data.oneSingleProduct.description);
            })
    }, [id]);
    
    const updateExistingProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}/edit`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                navigate("/", {replace: true})})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateExistingProduct}>
                <p>
                    <label>Product Name: </label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Product Price $</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Product Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

