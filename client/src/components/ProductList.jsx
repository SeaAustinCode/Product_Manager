import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductList = (props) => {

    const { id } = useParams();
    // const [oneSingleProduct, setOneSingleProduct] = useState({})
    const [allProducts, setAllProducts] = useState({})
    const { removeFromDom } = props;

    console.log("oneSingleProduct id is ")
    console.log(props.id)
    console.log("Object.values(allproducts) is ")
    // console.log(allProducts)
    // Object.entries(allProducts) tried to use this to change the object into an array 
    console.log(allProducts)

    const deleteAnExistingProduct = (id) => {

        // here we make a request to the DB to delete
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.allProducts)
                removeFromDom(id);
            })
            .catch(err => console.error(err));
    }


    // console.log("on Product List page, props is: " + props )

    return (
        <div>
            {props.allProducts.map((product, index) => { //second arguement (index) will just be the index in the array where that item is found. could I use product._id
                return (
                    <div key={index}> 
                        <Link to={`/products/${product._id}`}><hr /><p>{product.title}</p> </Link>
                        <button onClick={(e) => { deleteAnExistingProduct(product._id) }}> Delete </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList