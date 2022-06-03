import React, { useState } from "react";
import axios from "axios";
// import { index } from "../..//server/controllers/product.controller";

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        // send a post request to our API to create a product
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => {
                const errorResponse = err.response.data.errors; // get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in 
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors 
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Product Name: </label>
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Product Price: </label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}