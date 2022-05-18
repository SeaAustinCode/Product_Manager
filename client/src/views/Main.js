import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [oneSingleProduct, setOneSingleProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // const [product, setProduct] = useState([])

    // console.log("all Products is: " + allProducts)
    // // console.log("**products is: " + products)
    // console.log("product singular is " + oneSingleProduct)


    // READ 
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setAllProducts(res.data.allProducts); //added .allProducts to access the array of objects 
                setLoaded(true);
            })
            /* console.log(JSON.stringify(res.data) */
            .catch(error => console.log("Error: ", error));
    }, [])

    const removeFromDom = (productid) => {
        setAllProducts(allProducts.filter(product => product._id != productid));
    }

    // //DELETE 
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/products/:id")
    //         .then(res => setOneSingleProduct(res.data.oneSingleProduct)) //added .allProducts to access the array of objects 
    //         /* console.log(JSON.stringify(res.data) */
    //         .catch(error => console.log("Error: ", error))
    // }, [])


    return (
        <div>
            <ProductForm />
            {loaded && <ProductList allProducts={allProducts} removeFromDom={removeFromDom} />}
            {/* <ProductDetails oneSingleProduct={oneSingleProduct}/> */} {/* this is the second Product Details that is appearing on my page empty */}
        </div>
    );

}