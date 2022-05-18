import React, { useState } from "react";
import axios from "axios";

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
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