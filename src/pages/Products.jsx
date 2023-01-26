import React from 'react'
import { Grid } from "@mui/material"
import Product from '../components/Products/Product/Product'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Products = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
        .then((res)=> {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((e) => console.log(e))
    }, []);

    return (
        <main>
            <Grid container justify="center">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} /> 
                        {/* product as props required for product.name */}
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}


export default Products