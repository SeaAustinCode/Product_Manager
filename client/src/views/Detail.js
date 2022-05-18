import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

    
const Detail = (props) => {

    const [oneSingleProduct, setOneSingleProduct] = useState({}) //oneSingleProduct is key to response.json object that is being returned from the controller 

    const { id } = useParams();
    
    const navigate = useNavigate();


    // UPDATE 
    
    useEffect(() => {
        // console.log("this is what product is from the product Details page" + oneSingleProduct)
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setOneSingleProduct(res.data.oneSingleProduct))
            .catch(error => console.error(error));
    }, [id]); 
    


    // DELETE 
    const deleteAnExistingProduct = (id) => {
        
        // here we make a request to the DB to delete
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.oneSingleProduct)
                navigate("/")
            })
            .catch(err => console.error(err));
    }
    
    
    return (
        <div> {/* does this need a key? */} 
            {/* {JSON.stringify(oneSingleProduct)} */}
            {/* {JSON.stringify(props)}<br/> */}
            <h1>Product Name - {oneSingleProduct.title}</h1>{/* adding oneSingleProduct makes it all disappear */}
            <h3>Product Price - $: {oneSingleProduct.price}</h3>
            <h3>Product Description - {oneSingleProduct.description}</h3>
            <button onClick={(e) =>{deleteAnExistingProduct(oneSingleProduct._id)}}> Delete </button><p></p>
            {/* {JSON.stringify(allProducts)} */}
            <Link to={`/products/${id}/edit`}>Edit</Link>

        </div>
    )
}
    
export default Detail;